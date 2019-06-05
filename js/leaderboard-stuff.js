class Leaderboard {
    constructor() {
        this.leaderboardToShow = [];
    }

    draw(context, x, y) {

        let height = 44 + this.leaderboardToShow.length * 22;

        context.fillStyle = 'rgb(255,255,255)';
        context.fillRect(x - 3, y - 3, 231, height + 6);
        context.fillStyle = 'rgba(36,103,246)';
        context.fillRect(x, y, 225, height);

        this.drawTitle(context, x, y);
        this.drawTopTen(context, x, y);
    }

    drawTitle(context, x, y) {
        context.font = '26px Staatliches';
        context.fillStyle = '#fff';
        context.textAlign = 'center';
        context.fillText('Live Leaderboard', x + 112.5, y + 32);
    }

    drawTopTen(context, x, y) {
        context.textAlign = 'left';
        context.font = '20px Staatliches';
        context.fillStyle = '#fff';

        y += 56;
        for (let i = 0; i < this.leaderboardToShow.length; i++) {
            let { name, rank, score, me } = this.leaderboardToShow[i];

            if (me) {
                context.fillStyle = '#00ff00';
                name += '    (YOU)';
            } else {
                context.fillStyle = '#fff';
            }

            context.fillText(`${rank}. ${name}`, x + 10, y);
            context.fillText(score + '', x + 195, y);
            
            y += 22;
        }
    }

    setLeaderboard(arr) {
        this.leaderboardToShow = arr;
    }
}

class CloudVariables {
    constructor(url, name) {
        this.conn = new WebSocket(url);
        this.conn.onmessage = (msg) => this.onmessage(msg);
        this.name = name;
        this.users = {};
    }

    async onmessage(msg) {
        let data = await new Response(msg.data).json();
        
        if (data.status === 'end_game') {
            delete this.users[data.name];
        } else if (data.status === 'score_update') {
            this.users[data.name] = data;
            this.users[data.name].recieved = Date.now();
        }

        this.changed = true;
    }

    sendScore(score, game) {
        if (this.currentScore === score)
            return;

        this.sendObj({
            status: 'score_update',
            name: this.name,
            score,
            game
        });

        this.users[this.name] = {
            game,
            score,
            name: this.name,
            status: 'score_update',
            me: true
        }

        this.changed = true;
        this.currentScore = score;
    }

    endGame() {
        this.sendObj({
            status: 'end_game',
            name
        });
    }

    sendObj(obj) {
        let blob = new Blob([ JSON.stringify(obj) ]);
        this.conn.send(blob);
    }

    areChanges() {
        return !!this.changed;
    }

    getGameDetails(gameType) {
        let twoSecondsAgo = Date.now() - 2000;
        let players = Object.values(JSON.parse(JSON.stringify(this.users)))
            .filter(p => p.game === gameType && (p.recieved > twoSecondsAgo || p.me))
            .sort((a, b) => b.score - a.score)
            .splice(0, 10);
        
        players.forEach((p, i) => p.rank = i + 1);

        this.changed = false;
        return players;
    }
}
