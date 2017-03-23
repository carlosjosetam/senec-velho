"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DayNumber = {
    "0": "Domingo",
    "1": "Segunda-feira",
    "2": "Terça-feira",
    "3": "Quarta-feira",
    "4": "Quinta-feira",
    "5": "Sexta-feira",
    "6": "Sábado"
};
var GroupByDayPipe = (function () {
    function GroupByDayPipe() {
    }
    GroupByDayPipe.prototype.transform = function (value, field) {
        var _this = this;
        var groupedObj = value.reduce(function (prev, cur) {
            var day = _this.getDayOfWeek(cur[field]);
            if (!prev[day]) {
                prev[day] = [cur];
            }
            else {
                prev[day].push(cur);
            }
            return prev;
        }, {});
        return Object.keys(groupedObj).map(function (key) { return ({ key: key, value: groupedObj[key] }); });
    };
    GroupByDayPipe.prototype.getDayOfWeek = function (value) {
        var date = new Date(value);
        return DayNumber[date.getDay()];
    };
    return GroupByDayPipe;
}());
GroupByDayPipe = __decorate([
    core_1.Pipe({ name: 'groupByDay' })
], GroupByDayPipe);
exports.GroupByDayPipe = GroupByDayPipe;
//# sourceMappingURL=groupByDay.pipe.js.map