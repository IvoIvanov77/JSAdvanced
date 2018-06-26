function solve() {

    let id = 0;
    let reports = new Map();
    let $selector;

    return {
        report : function(author, description, reproducible, severity){
            let report = {
                id: id ++,
                author: author,
                description: description,
                reproducible: reproducible,
                severity: severity,
                status: 'Open'
            };
            reports.set( report.id, report);
            this.output($selector)
        },

        setStatus : function(id, newStatus){
           reports.get(id).status = newStatus;
           this.output($selector);
        },

        remove : function(id){
            reports.delete(id);
            this.output($selector);
        },

        sort : function(method = 'ID'){
            let arr = this.getReports();
            // 'author', 'severity' or 'ID'
            switch (method) {
                case 'ID' : arr.sort((r1, r2) => r1.id - r2.id);
                break;
                case 'author' : arr.sort((r1, r2) => r1.author.localeCompare(r2.author));
                break;
                case 'severity' : arr.sort((r1, r2) => r1.severity - r2.severity);
                break;
            }
            reports.clear();
            for (let r of arr) {
                reports.set(r.id, r);
            }
            this.output($selector);

        },

        output : function(selector) {
            $selector = selector;
            let element = $($selector);
            element.empty();
            this.getReports().forEach(r => {
                element.append(`
<div id="report_${r.id}" class="report">
  <div class="body">
    <p>${r.description}</p>
  </div>
  <div class="title">
    <span class="author">Submitted by: ${r.author}</span>
    <span class="status">${r.status} | ${r.severity}</span>
  </div>
</div>
`)
            })
        },

        getReports : () => {
            return [...reports.values()];
        }

    }
    
}




