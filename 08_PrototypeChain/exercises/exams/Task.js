class Task {
    constructor(title, deadline){
        this.title = title;
        this.status = 'Open';
        this.deadline = deadline;

    }

    get title() {
        return this._title;
    }

    get deadline() {
        return this._deadline;
    }

    get status() {
        return this._status;
    }


    set title(value) {
        this._title = value;
    }

    set status(status){
        this._status = status;
    }

    set deadline(date){
        if(date < Date.now()){
            throw new Error();
        }
        this._deadline = date;
    }

    get isOverdue() {
        return this.deadline < Date.now() && this.status !== 'Complete';
    }

    static comparator(a, b){
        let statusA = a.getStatus();
        let statusB = b.getStatus();
        if(statusA - statusB === 0){
            return a.deadline - b.deadline;
        }
        return statusA - statusB
    }

    getStatus(){
        if(this.isOverdue){
            return 0;
        }
        switch (this._status) {
            case 'In Progress' : return 1;
            case 'Open' : return 2;
            case 'Complete' : return 3;
        }

    }

    toString(){
        let icons = {
            2 : '\u2731',
            1 : '\u219D',
            3 : '\u2714',
            0 : '\u26A0'
        };
        let icon = icons[this.getStatus()];
        let deadline = this.isOverdue ? '(overdue)'
            : `(deadline: ${this.deadline})`;
        if(this.status === 'Complete'){
            deadline = '';
        }

        return `[${icon}] ${this.title} ${deadline}`.trim()

    }
}


