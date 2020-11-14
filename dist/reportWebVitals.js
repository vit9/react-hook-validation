"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var reportWebVitals = function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    Promise.resolve().then(function () {
      return _interopRequireWildcard(require('web-vitals'));
    }).then(function (_ref) {
      var getCLS = _ref.getCLS,
          getFID = _ref.getFID,
          getFCP = _ref.getFCP,
          getLCP = _ref.getLCP,
          getTTFB = _ref.getTTFB;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

var _default = reportWebVitals;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBvcnRXZWJWaXRhbHMuanMiXSwibmFtZXMiOlsicmVwb3J0V2ViVml0YWxzIiwib25QZXJmRW50cnkiLCJGdW5jdGlvbiIsInRoZW4iLCJnZXRDTFMiLCJnZXRGSUQiLCJnZXRGQ1AiLCJnZXRMQ1AiLCJnZXRUVEZCIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxXQUFXLEVBQUk7QUFDckMsTUFBSUEsV0FBVyxJQUFJQSxXQUFXLFlBQVlDLFFBQTFDLEVBQW9EO0FBQ2xEO0FBQUEsNkNBQU8sWUFBUDtBQUFBLE9BQXFCQyxJQUFyQixDQUEwQixnQkFBaUQ7QUFBQSxVQUE5Q0MsTUFBOEMsUUFBOUNBLE1BQThDO0FBQUEsVUFBdENDLE1BQXNDLFFBQXRDQSxNQUFzQztBQUFBLFVBQTlCQyxNQUE4QixRQUE5QkEsTUFBOEI7QUFBQSxVQUF0QkMsTUFBc0IsUUFBdEJBLE1BQXNCO0FBQUEsVUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ3pFSixNQUFBQSxNQUFNLENBQUNILFdBQUQsQ0FBTjtBQUNBSSxNQUFBQSxNQUFNLENBQUNKLFdBQUQsQ0FBTjtBQUNBSyxNQUFBQSxNQUFNLENBQUNMLFdBQUQsQ0FBTjtBQUNBTSxNQUFBQSxNQUFNLENBQUNOLFdBQUQsQ0FBTjtBQUNBTyxNQUFBQSxPQUFPLENBQUNQLFdBQUQsQ0FBUDtBQUNELEtBTkQ7QUFPRDtBQUNGLENBVkQ7O2VBWWVELGUiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXBvcnRXZWJWaXRhbHMgPSBvblBlcmZFbnRyeSA9PiB7XG4gIGlmIChvblBlcmZFbnRyeSAmJiBvblBlcmZFbnRyeSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgaW1wb3J0KCd3ZWItdml0YWxzJykudGhlbigoeyBnZXRDTFMsIGdldEZJRCwgZ2V0RkNQLCBnZXRMQ1AsIGdldFRURkIgfSkgPT4ge1xuICAgICAgZ2V0Q0xTKG9uUGVyZkVudHJ5KTtcbiAgICAgIGdldEZJRChvblBlcmZFbnRyeSk7XG4gICAgICBnZXRGQ1Aob25QZXJmRW50cnkpO1xuICAgICAgZ2V0TENQKG9uUGVyZkVudHJ5KTtcbiAgICAgIGdldFRURkIob25QZXJmRW50cnkpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXBvcnRXZWJWaXRhbHM7XG4iXX0=