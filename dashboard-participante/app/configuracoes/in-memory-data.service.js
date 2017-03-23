"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var Configuracoes = {
            "inicioSemana": new Date(2017, 09, 18),
            "terminoSemana": new Date(2017, 09, 22)
        };
        return Configuracoes;
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map