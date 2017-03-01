"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const common_1 = require('@angular/common');
const forms_1 = require('@angular/forms');
const groupBy_pipe_1 = require('./groupBy.pipe');
const groupByDay_pipe_1 = require('./groupByDay.pipe');
const limitTo_pipe_1 = require('./limitTo.pipe');
const search_input_component_1 = require('./search-input/search-input.component');
const search_input_service_1 = require('./search-input/search-input.service');
const material_1 = require('@angular/material');
const flex_layout_1 = require('@angular/flex-layout');
const md2_1 = require('md2');
let SharedModule = class SharedModule {
};
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
    }), 
    __metadata('design:paramtypes', [])
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map