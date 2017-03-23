"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var groupBy_pipe_1 = require("./groupBy.pipe");
var groupByDay_pipe_1 = require("./groupByDay.pipe");
var limitTo_pipe_1 = require("./limitTo.pipe");
var search_input_component_1 = require("./search-input/search-input.component");
var search_input_service_1 = require("./search-input/search-input.service");
var material_1 = require("@angular/material");
var flex_layout_1 = require("@angular/flex-layout");
var md2_1 = require("md2");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, material_1.MaterialModule.forRoot(), flex_layout_1.FlexLayoutModule.forRoot(), md2_1.Md2Module.forRoot()],
        declarations: [groupBy_pipe_1.GroupByPipe, groupByDay_pipe_1.GroupByDayPipe, limitTo_pipe_1.LimitToPipe, search_input_component_1.SearchInputComponent],
        providers: [search_input_service_1.SearchInputService],
        exports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            groupBy_pipe_1.GroupByPipe,
            groupByDay_pipe_1.GroupByDayPipe,
            limitTo_pipe_1.LimitToPipe,
            search_input_component_1.SearchInputComponent,
            material_1.MaterialModule,
            flex_layout_1.FlexLayoutModule,
            md2_1.Md2Module
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map