webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./pages/index.module.css":
/*!********************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./pages/index.module.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".index_Bodypage__3iELF{\r\n  font-family: 'Fredoka One', cursive;\r\n}\r\n.index_container__3XRMM {\r\n    align-items: center;\r\n    margin: auto;\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: repeat(3,1fr);\r\n    grid-template-rows: repeat(6,1fr); \r\n    grid-gap: 15px 10px; \r\n    gap: 15px 10px;\r\n  }\r\n  .index_card__25bO8{\r\n    border: 1px solid #eaeaea;\r\n    border-radius: 10px;\r\n    color: inherit;\r\n    display: flex;\r\n    justify-content: center;\r\n    list-style: none;\r\n    margin: 1rem;\r\n    padding: 1.5rem;\r\n  }\r\n  .index_card__25bO8 h4{\r\n    font-size: calc(12px + (18 - 12) * ((100vw - 300px) / (1600 - 300)));\r\n  }\r\n  .index_card__25bO8 p{\r\n    font-size: calc(10px + (16 - 12) * ((100vw - 300px) / (1600 - 300)));\r\n  }\r\n  .index_card__25bO8 > img{\r\n    border-radius: 10px;\r\n    height: 50%;\r\n    width: 50%;\r\n  }\r\n  .index_btn__32rjJ{\r\n    background-color: inherit;\r\n  }\r\n  @media (max-width: 600px) {\r\n    .index_container__3XRMM {\r\n      grid-template-columns: repeat(2,1fr);\r\n    }\r\n    .index_card__25bO8{\r\n      flex-direction:column;\r\n    }\r\n    .index_card__25bO8 > img{\r\n      align-self: center;\r\n      border-radius: 10px;\r\n      height: 85%;\r\n      width: 85%;\r\n    }\r\n    .index_card__25bO8 h4{\r\n      align-self: center;\r\n      font-size: calc(12px + (18 - 12) * ((100vw - 300px) / (1600 - 300)));\r\n    }\r\n  }\r\n", "",{"version":3,"sources":["webpack://pages/index.module.css"],"names":[],"mappings":"AACA;EACE,mCAAmC;AACrC;AACA;IACI,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,aAAa;IACb,oCAAoC;IACpC,iCAAiC;IACjC,mBAAc;IAAd,cAAc;EAChB;EACA;IACE,yBAAyB;IACzB,mBAAmB;IACnB,cAAc;IACd,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,YAAY;IACZ,eAAe;EACjB;EACA;IACE,oEAAoE;EACtE;EACA;IACE,oEAAoE;EACtE;EACA;IACE,mBAAmB;IACnB,WAAW;IACX,UAAU;EACZ;EACA;IACE,yBAAyB;EAC3B;EACA;IACE;MACE,oCAAoC;IACtC;IACA;MACE,qBAAqB;IACvB;IACA;MACE,kBAAkB;MAClB,mBAAmB;MACnB,WAAW;MACX,UAAU;IACZ;IACA;MACE,kBAAkB;MAClB,oEAAoE;IACtE;EACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');\r\n.Bodypage{\r\n  font-family: 'Fredoka One', cursive;\r\n}\r\n.container {\r\n    align-items: center;\r\n    margin: auto;\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: repeat(3,1fr);\r\n    grid-template-rows: repeat(6,1fr); \r\n    gap: 15px 10px;\r\n  }\r\n  .card{\r\n    border: 1px solid #eaeaea;\r\n    border-radius: 10px;\r\n    color: inherit;\r\n    display: flex;\r\n    justify-content: center;\r\n    list-style: none;\r\n    margin: 1rem;\r\n    padding: 1.5rem;\r\n  }\r\n  .card h4{\r\n    font-size: calc(12px + (18 - 12) * ((100vw - 300px) / (1600 - 300)));\r\n  }\r\n  .card p{\r\n    font-size: calc(10px + (16 - 12) * ((100vw - 300px) / (1600 - 300)));\r\n  }\r\n  .card > img{\r\n    border-radius: 10px;\r\n    height: 50%;\r\n    width: 50%;\r\n  }\r\n  .btn{\r\n    background-color: inherit;\r\n  }\r\n  @media (max-width: 600px) {\r\n    .container {\r\n      grid-template-columns: repeat(2,1fr);\r\n    }\r\n    .card{\r\n      flex-direction:column;\r\n    }\r\n    .card > img{\r\n      align-self: center;\r\n      border-radius: 10px;\r\n      height: 85%;\r\n      width: 85%;\r\n    }\r\n    .card h4{\r\n      align-self: center;\r\n      font-size: calc(12px + (18 - 12) * ((100vw - 300px) / (1600 - 300)));\r\n    }\r\n  }\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Bodypage": "index_Bodypage__3iELF",
	"container": "index_container__3XRMM",
	"card": "index_card__25bO8",
	"btn": "index_btn__32rjJ"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBLDhCQUE4QixRQUFTLGtGQUFrRjtBQUN6SDtBQUNBLDhCQUE4QixRQUFTLDBCQUEwQiwwQ0FBMEMsS0FBSyw2QkFBNkIsNEJBQTRCLHFCQUFxQixvQkFBb0Isc0JBQXNCLHNCQUFzQiw2Q0FBNkMsMENBQTBDLDZCQUE2Qix3QkFBd0IsT0FBTyx5QkFBeUIsa0NBQWtDLDRCQUE0Qix1QkFBdUIsc0JBQXNCLGdDQUFnQyx5QkFBeUIscUJBQXFCLHdCQUF3QixPQUFPLDRCQUE0Qiw2RUFBNkUsT0FBTywyQkFBMkIsNkVBQTZFLE9BQU8sK0JBQStCLDRCQUE0QixvQkFBb0IsbUJBQW1CLE9BQU8sd0JBQXdCLGtDQUFrQyxPQUFPLGlDQUFpQyxpQ0FBaUMsK0NBQStDLFNBQVMsMkJBQTJCLGdDQUFnQyxTQUFTLGlDQUFpQyw2QkFBNkIsOEJBQThCLHNCQUFzQixxQkFBcUIsU0FBUyw4QkFBOEIsNkJBQTZCLCtFQUErRSxTQUFTLE9BQU8sV0FBVyx1RkFBdUYsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxZQUFZLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sMEdBQTBHLGNBQWMsMENBQTBDLEtBQUssZ0JBQWdCLDRCQUE0QixxQkFBcUIsb0JBQW9CLHNCQUFzQixzQkFBc0IsNkNBQTZDLDBDQUEwQyx3QkFBd0IsT0FBTyxZQUFZLGtDQUFrQyw0QkFBNEIsdUJBQXVCLHNCQUFzQixnQ0FBZ0MseUJBQXlCLHFCQUFxQix3QkFBd0IsT0FBTyxlQUFlLDZFQUE2RSxPQUFPLGNBQWMsNkVBQTZFLE9BQU8sa0JBQWtCLDRCQUE0QixvQkFBb0IsbUJBQW1CLE9BQU8sV0FBVyxrQ0FBa0MsT0FBTyxpQ0FBaUMsb0JBQW9CLCtDQUErQyxTQUFTLGNBQWMsZ0NBQWdDLFNBQVMsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsc0JBQXNCLHFCQUFxQixTQUFTLGlCQUFpQiw2QkFBNkIsK0VBQStFLFNBQVMsT0FBTyx1QkFBdUI7QUFDOTlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTc1YTJjNDQ4YjJjMGNjY2EyODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZyZWRva2ErT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pbmRleF9Cb2R5cGFnZV9fM2lFTEZ7XFxyXFxuICBmb250LWZhbWlseTogJ0ZyZWRva2EgT25lJywgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuLmluZGV4X2NvbnRhaW5lcl9fM1hSTU0ge1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsMWZyKTsgXFxyXFxuICAgIGdyaWQtZ2FwOiAxNXB4IDEwcHg7IFxcclxcbiAgICBnYXA6IDE1cHggMTBweDtcXHJcXG4gIH1cXHJcXG4gIC5pbmRleF9jYXJkX18yNWJPOHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gIH1cXHJcXG4gIC5pbmRleF9jYXJkX18yNWJPOCBoNHtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAoMTggLSAxMikgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XFxyXFxuICB9XFxyXFxuICAuaW5kZXhfY2FyZF9fMjViTzggcHtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAoMTYgLSAxMikgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XFxyXFxuICB9XFxyXFxuICAuaW5kZXhfY2FyZF9fMjViTzggPiBpbWd7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgfVxcclxcbiAgLmluZGV4X2J0bl9fMzJyakp7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgLmluZGV4X2NvbnRhaW5lcl9fM1hSTU0ge1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcXHJcXG4gICAgfVxcclxcbiAgICAuaW5kZXhfY2FyZF9fMjViTzh7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbiAgICB9XFxyXFxuICAgIC5pbmRleF9jYXJkX18yNWJPOCA+IGltZ3tcXHJcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDg1JTtcXHJcXG4gICAgICB3aWR0aDogODUlO1xcclxcbiAgICB9XFxyXFxuICAgIC5pbmRleF9jYXJkX18yNWJPOCBoNHtcXHJcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAoMTggLSAxMikgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vcGFnZXMvaW5kZXgubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsaUNBQWlDO0lBQ2pDLG1CQUFjO0lBQWQsY0FBYztFQUNoQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7RUFDakI7RUFDQTtJQUNFLG9FQUFvRTtFQUN0RTtFQUNBO0lBQ0Usb0VBQW9FO0VBQ3RFO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFVBQVU7RUFDWjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRTtNQUNFLG9DQUFvQztJQUN0QztJQUNBO01BQ0UscUJBQXFCO0lBQ3ZCO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLFdBQVc7TUFDWCxVQUFVO0lBQ1o7SUFDQTtNQUNFLGtCQUFrQjtNQUNsQixvRUFBb0U7SUFDdEU7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GcmVkb2thK09uZSZkaXNwbGF5PXN3YXAnKTtcXHJcXG4uQm9keXBhZ2V7XFxyXFxuICBmb250LWZhbWlseTogJ0ZyZWRva2EgT25lJywgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwxZnIpOyBcXHJcXG4gICAgZ2FwOiAxNXB4IDEwcHg7XFxyXFxuICB9XFxyXFxuICAuY2FyZHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gIH1cXHJcXG4gIC5jYXJkIGg0e1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMTJweCArICgxOCAtIDEyKSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcXHJcXG4gIH1cXHJcXG4gIC5jYXJkIHB7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgKDE2IC0gMTIpICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xcclxcbiAgfVxcclxcbiAgLmNhcmQgPiBpbWd7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgfVxcclxcbiAgLmJ0bntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNhcmR7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbiAgICB9XFxyXFxuICAgIC5jYXJkID4gaW1ne1xcclxcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgIGhlaWdodDogODUlO1xcclxcbiAgICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNhcmQgaDR7XFxyXFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgKDE4IC0gMTIpICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiQm9keXBhZ2VcIjogXCJpbmRleF9Cb2R5cGFnZV9fM2lFTEZcIixcblx0XCJjb250YWluZXJcIjogXCJpbmRleF9jb250YWluZXJfXzNYUk1NXCIsXG5cdFwiY2FyZFwiOiBcImluZGV4X2NhcmRfXzI1Yk84XCIsXG5cdFwiYnRuXCI6IFwiaW5kZXhfYnRuX18zMnJqSlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=