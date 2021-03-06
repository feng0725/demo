function EnentTarget() {
    this.handlers = {}
}

EnentTarget.prototype = {
    constructor: EnentTarget,
    addHandler: function (type, handler) {
        if (typeof this.handlers[type] == 'undefined') {
            this.handlers[type] = {}
        }
        this.handlers[type].push(handler)
    },
    fire: function (event) {
        if (!event.target) {
            event.target = this;
        }

        if (this.handlers[event.type] instanceof Array) {
            var handlers = this.handlers[event.type]
            for (i = 0; i < handlers.length; i++) {
                handlers[i](event)
            }
        }
    },
    removeHandler: function (type, handler) {
        if (this.handlers[type] instanceof Array) {
            var handlers = this.handlers[type];
            for (var i = 0; i < handlers.length; i++) {
                if (handlers[i] === handler) {
                    break;
                }
            }
            handlers.splice(i, 1);


        }

    }
}