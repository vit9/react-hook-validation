"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useValidation;

var _react = require("react");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useValidation(params) {
  // const [isRender, setIsRender] = useState(isReactivityValdiation);
  var _useState = (0, _react.useState)(params),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(function () {
    var _getFields2 = _getFields(params, true),
        errorFields = _getFields2.errorFields,
        error = _getFields2.error;

    return {
      error: error,
      validation: errorFields
    };
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      validationResponse = _useState4[0],
      setValidationResponse = _useState4[1];

  function onChangeHandler(event) {
    event.preventDefault();
    setValue(function (prev) {
      var _event$target, _event$target2, _event$target3;

      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, event === null || event === void 0 ? void 0 : (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.name, _objectSpread(_objectSpread({}, prev[event === null || event === void 0 ? void 0 : (_event$target2 = event.target) === null || _event$target2 === void 0 ? void 0 : _event$target2.name]), {}, {
        value: event === null || event === void 0 ? void 0 : (_event$target3 = event.target) === null || _event$target3 === void 0 ? void 0 : _event$target3.value
      })));
    });
  }

  function startValidation(customFunc) {
    var _getFields3 = _getFields(value),
        errorFields = _getFields3.errorFields,
        error = _getFields3.error;

    setValidationResponse(function (pr) {
      return _objectSpread(_objectSpread({}, pr), {}, {
        error: error,
        validation: errorFields
      });
    });
    return customFunc(errorFields, error);
  }

  function maxLengthValidation(field) {
    var _field, _field$value;

    if (((_field = field) === null || _field === void 0 ? void 0 : _field.maxLength) < ((_field$value = field.value) === null || _field$value === void 0 ? void 0 : _field$value.length)) {
      field = _objectSpread(_objectSpread({}, field), {}, {
        errors: "".concat(field.errors.maxLength, " ").concat(field.maxLength)
      });
      return field;
    }

    field = _objectSpread(_objectSpread({}, field), {}, {
      errors: ''
    });
    return field;
  }

  function minLengthValidation(field) {
    var _field2, _field$value2;

    if (((_field2 = field) === null || _field2 === void 0 ? void 0 : _field2.minLength) > ((_field$value2 = field.value) === null || _field$value2 === void 0 ? void 0 : _field$value2.length)) {
      var _field3, _field3$errors, _field4;

      field = _objectSpread(_objectSpread({}, field), {}, {
        errors: "".concat((_field3 = field) === null || _field3 === void 0 ? void 0 : (_field3$errors = _field3.errors) === null || _field3$errors === void 0 ? void 0 : _field3$errors.minLength, " ").concat((_field4 = field) === null || _field4 === void 0 ? void 0 : _field4.minLength)
      });
      return field;
    }

    field = _objectSpread(_objectSpread({}, field), {}, {
      errors: ''
    });
    return field;
  }

  function _checkFields(field, isFirstRender) {
    var _field5, _field6, _field7, _field8;

    if (((_field5 = field) === null || _field5 === void 0 ? void 0 : _field5.type) === 'number') {
      var isNotNumber = isNaN(Number(field.value));

      if (isNotNumber) {
        field = _objectSpread(_objectSpread({}, field), {}, {
          errors: field.errors.isNumber
        });
        return field;
      }

      if (maxLengthValidation(field).errors) {
        return maxLengthValidation(field);
      }

      if (minLengthValidation(field).errors) {
        return minLengthValidation(field);
      }
    }

    if (!((_field6 = field) === null || _field6 === void 0 ? void 0 : _field6.value) && !isFirstRender && field.required) {
      field = _objectSpread(_objectSpread({}, field), {}, {
        errors: field.errors.value_e
      });
      return field;
    }

    if (((_field7 = field) === null || _field7 === void 0 ? void 0 : _field7.regexp) && ((_field8 = field) === null || _field8 === void 0 ? void 0 : _field8.value) !== null) {
      var _field9, _field9$errors;

      field = _objectSpread(_objectSpread({}, field), {}, {
        errors: field.regexp.test(field.value) ? '' : (_field9 = field) === null || _field9 === void 0 ? void 0 : (_field9$errors = _field9.errors) === null || _field9$errors === void 0 ? void 0 : _field9$errors.regexp
      });
      return field;
    }

    if (maxLengthValidation(field).errors) {
      return maxLengthValidation(field);
    }

    if (minLengthValidation(field).errors) {
      return minLengthValidation(field);
    }

    field = _objectSpread(_objectSpread({}, field), {}, {
      errors: ''
    });
    return field;
  }

  function _getFields(params, isFirstRender) {
    var error = false;
    var fields = Object.values(params);
    var errorFields = fields.map(function (field) {
      if (_checkFields(field, isFirstRender).errors) {
        error = true;
        return _checkFields(field, isFirstRender);
      }

      return _checkFields(field, isFirstRender);
    });
    return {
      errorFields: errorFields,
      error: error
    };
  }

  return [].concat(_toConsumableArray(validationResponse.validation), [value, onChangeHandler, startValidation]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1c2VWYWxpZGF0aW9uIiwicGFyYW1zIiwidmFsdWUiLCJzZXRWYWx1ZSIsIl9nZXRGaWVsZHMiLCJlcnJvckZpZWxkcyIsImVycm9yIiwidmFsaWRhdGlvbiIsInZhbGlkYXRpb25SZXNwb25zZSIsInNldFZhbGlkYXRpb25SZXNwb25zZSIsIm9uQ2hhbmdlSGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwcmV2IiwidGFyZ2V0IiwibmFtZSIsInN0YXJ0VmFsaWRhdGlvbiIsImN1c3RvbUZ1bmMiLCJwciIsIm1heExlbmd0aFZhbGlkYXRpb24iLCJmaWVsZCIsIm1heExlbmd0aCIsImxlbmd0aCIsImVycm9ycyIsIm1pbkxlbmd0aFZhbGlkYXRpb24iLCJtaW5MZW5ndGgiLCJfY2hlY2tGaWVsZHMiLCJpc0ZpcnN0UmVuZGVyIiwidHlwZSIsImlzTm90TnVtYmVyIiwiaXNOYU4iLCJOdW1iZXIiLCJpc051bWJlciIsInJlcXVpcmVkIiwidmFsdWVfZSIsInJlZ2V4cCIsInRlc3QiLCJmaWVsZHMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdlLFNBQVNBLGFBQVQsQ0FBdUJDLE1BQXZCLEVBQStCO0FBRTFDO0FBRjBDLGtCQUdoQixxQkFBU0EsTUFBVCxDQUhnQjtBQUFBO0FBQUEsTUFHbkNDLEtBSG1DO0FBQUEsTUFHNUJDLFFBSDRCOztBQUFBLG1CQUlVLHFCQUFTLFlBQU07QUFBQSxzQkFDaENDLFVBQVUsQ0FBQ0gsTUFBRCxFQUFTLElBQVQsQ0FEc0I7QUFBQSxRQUN2REksV0FEdUQsZUFDdkRBLFdBRHVEO0FBQUEsUUFDMUNDLEtBRDBDLGVBQzFDQSxLQUQwQzs7QUFFL0QsV0FBTztBQUFDQSxNQUFBQSxLQUFLLEVBQUxBLEtBQUQ7QUFBUUMsTUFBQUEsVUFBVSxFQUFFRjtBQUFwQixLQUFQO0FBQ0gsR0FIbUQsQ0FKVjtBQUFBO0FBQUEsTUFJbkNHLGtCQUptQztBQUFBLE1BSWZDLHFCQUplOztBQVMxQyxXQUFTQyxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUM1QkEsSUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0FULElBQUFBLFFBQVEsQ0FBQyxVQUFDVSxJQUFEO0FBQUE7O0FBQUEsNkNBQWVBLElBQWYsMkJBQXNCRixLQUF0QixhQUFzQkEsS0FBdEIsd0NBQXNCQSxLQUFLLENBQUVHLE1BQTdCLGtEQUFzQixjQUFlQyxJQUFyQyxrQ0FBZ0RGLElBQUksQ0FBQ0YsS0FBRCxhQUFDQSxLQUFELHlDQUFDQSxLQUFLLENBQUVHLE1BQVIsbURBQUMsZUFBZUMsSUFBaEIsQ0FBcEQ7QUFBMkViLFFBQUFBLEtBQUssRUFBRVMsS0FBRixhQUFFQSxLQUFGLHlDQUFFQSxLQUFLLENBQUVHLE1BQVQsbURBQUUsZUFBZVo7QUFBakc7QUFBQSxLQUFELENBQVI7QUFFSDs7QUFFRCxXQUFTYyxlQUFULENBQXlCQyxVQUF6QixFQUFxQztBQUFBLHNCQUNGYixVQUFVLENBQUNGLEtBQUQsQ0FEUjtBQUFBLFFBQ3pCRyxXQUR5QixlQUN6QkEsV0FEeUI7QUFBQSxRQUNaQyxLQURZLGVBQ1pBLEtBRFk7O0FBRWpDRyxJQUFBQSxxQkFBcUIsQ0FBQyxVQUFDUyxFQUFEO0FBQUEsNkNBQWFBLEVBQWI7QUFBaUJaLFFBQUFBLEtBQUssRUFBTEEsS0FBakI7QUFBd0JDLFFBQUFBLFVBQVUsRUFBRUY7QUFBcEM7QUFBQSxLQUFELENBQXJCO0FBQ0EsV0FBT1ksVUFBVSxDQUFDWixXQUFELEVBQWNDLEtBQWQsQ0FBakI7QUFDSDs7QUFFRCxXQUFTYSxtQkFBVCxDQUE2QkMsS0FBN0IsRUFBb0M7QUFBQTs7QUFDaEMsUUFBRyxXQUFBQSxLQUFLLFVBQUwsd0NBQU9DLFNBQVAscUJBQW1CRCxLQUFLLENBQUNsQixLQUF6QixpREFBbUIsYUFBYW9CLE1BQWhDLENBQUgsRUFBMkM7QUFDdkNGLE1BQUFBLEtBQUssbUNBQU9BLEtBQVA7QUFBY0csUUFBQUEsTUFBTSxZQUFLSCxLQUFLLENBQUNHLE1BQU4sQ0FBYUYsU0FBbEIsY0FBK0JELEtBQUssQ0FBQ0MsU0FBckM7QUFBcEIsUUFBTDtBQUNBLGFBQU9ELEtBQVA7QUFDSDs7QUFDREEsSUFBQUEsS0FBSyxtQ0FBT0EsS0FBUDtBQUFjRyxNQUFBQSxNQUFNLEVBQUU7QUFBdEIsTUFBTDtBQUNBLFdBQU9ILEtBQVA7QUFDSDs7QUFFRCxXQUFTSSxtQkFBVCxDQUE2QkosS0FBN0IsRUFBb0M7QUFBQTs7QUFDaEMsUUFBSSxZQUFBQSxLQUFLLFVBQUwsMENBQU9LLFNBQVAsc0JBQW1CTCxLQUFLLENBQUNsQixLQUF6QixrREFBbUIsY0FBYW9CLE1BQWhDLENBQUosRUFBNEM7QUFBQTs7QUFDeENGLE1BQUFBLEtBQUssbUNBQU9BLEtBQVA7QUFBY0csUUFBQUEsTUFBTSx1QkFBS0gsS0FBTCw4REFBSyxRQUFPRyxNQUFaLG1EQUFLLGVBQWVFLFNBQXBCLHlCQUFpQ0wsS0FBakMsNENBQWlDLFFBQU9LLFNBQXhDO0FBQXBCLFFBQUw7QUFDQSxhQUFPTCxLQUFQO0FBQ0g7O0FBQ0RBLElBQUFBLEtBQUssbUNBQU9BLEtBQVA7QUFBY0csTUFBQUEsTUFBTSxFQUFFO0FBQXRCLE1BQUw7QUFDQSxXQUFPSCxLQUFQO0FBQ0g7O0FBRUQsV0FBU00sWUFBVCxDQUFzQk4sS0FBdEIsRUFBNkJPLGFBQTdCLEVBQTRDO0FBQUE7O0FBRXhDLFFBQUcsWUFBQVAsS0FBSyxVQUFMLDBDQUFPUSxJQUFQLE1BQWdCLFFBQW5CLEVBQTZCO0FBQ3pCLFVBQU1DLFdBQVcsR0FBR0MsS0FBSyxDQUFDQyxNQUFNLENBQUNYLEtBQUssQ0FBQ2xCLEtBQVAsQ0FBUCxDQUF6Qjs7QUFFQSxVQUFHMkIsV0FBSCxFQUFnQjtBQUNaVCxRQUFBQSxLQUFLLG1DQUFPQSxLQUFQO0FBQWNHLFVBQUFBLE1BQU0sRUFBRUgsS0FBSyxDQUFDRyxNQUFOLENBQWFTO0FBQW5DLFVBQUw7QUFDQSxlQUFPWixLQUFQO0FBQ0g7O0FBRUQsVUFBR0QsbUJBQW1CLENBQUNDLEtBQUQsQ0FBbkIsQ0FBMkJHLE1BQTlCLEVBQXNDO0FBQ2xDLGVBQU9KLG1CQUFtQixDQUFDQyxLQUFELENBQTFCO0FBQ0g7O0FBRUQsVUFBR0ksbUJBQW1CLENBQUNKLEtBQUQsQ0FBbkIsQ0FBMkJHLE1BQTlCLEVBQXNDO0FBQ2xDLGVBQU9DLG1CQUFtQixDQUFDSixLQUFELENBQTFCO0FBQ0g7QUFDSjs7QUFFRCxRQUFHLGFBQUNBLEtBQUQsNENBQUMsUUFBT2xCLEtBQVIsS0FBaUIsQ0FBQ3lCLGFBQWxCLElBQW1DUCxLQUFLLENBQUNhLFFBQTVDLEVBQXNEO0FBQ2xEYixNQUFBQSxLQUFLLG1DQUFPQSxLQUFQO0FBQWNHLFFBQUFBLE1BQU0sRUFBRUgsS0FBSyxDQUFDRyxNQUFOLENBQWFXO0FBQW5DLFFBQUw7QUFDQSxhQUFPZCxLQUFQO0FBQ0g7O0FBQ0QsUUFBRyxZQUFBQSxLQUFLLFVBQUwsMENBQU9lLE1BQVAsS0FBaUIsWUFBQWYsS0FBSyxVQUFMLDBDQUFPbEIsS0FBUCxNQUFpQixJQUFyQyxFQUEyQztBQUFBOztBQUN2Q2tCLE1BQUFBLEtBQUssbUNBQU9BLEtBQVA7QUFBY0csUUFBQUEsTUFBTSxFQUFFSCxLQUFLLENBQUNlLE1BQU4sQ0FBYUMsSUFBYixDQUFrQmhCLEtBQUssQ0FBQ2xCLEtBQXhCLElBQWlDLEVBQWpDLGNBQXNDa0IsS0FBdEMsOERBQXNDLFFBQU9HLE1BQTdDLG1EQUFzQyxlQUFlWTtBQUEzRSxRQUFMO0FBQ0EsYUFBT2YsS0FBUDtBQUNIOztBQUNELFFBQUdELG1CQUFtQixDQUFDQyxLQUFELENBQW5CLENBQTJCRyxNQUE5QixFQUFzQztBQUNsQyxhQUFPSixtQkFBbUIsQ0FBQ0MsS0FBRCxDQUExQjtBQUNIOztBQUNELFFBQUdJLG1CQUFtQixDQUFDSixLQUFELENBQW5CLENBQTJCRyxNQUE5QixFQUFzQztBQUNsQyxhQUFPQyxtQkFBbUIsQ0FBQ0osS0FBRCxDQUExQjtBQUNIOztBQUNEQSxJQUFBQSxLQUFLLG1DQUFPQSxLQUFQO0FBQWNHLE1BQUFBLE1BQU0sRUFBRTtBQUF0QixNQUFMO0FBQ0EsV0FBT0gsS0FBUDtBQUNIOztBQUVELFdBQVNoQixVQUFULENBQXFCSCxNQUFyQixFQUE2QjBCLGFBQTdCLEVBQTRDO0FBQ3BDLFFBQUlyQixLQUFLLEdBQUcsS0FBWjtBQUNBLFFBQU0rQixNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjdEMsTUFBZCxDQUFmO0FBQ0EsUUFBTUksV0FBVyxHQUFHZ0MsTUFBTSxDQUFDRyxHQUFQLENBQVcsVUFBQ3BCLEtBQUQsRUFBVztBQUN0QyxVQUFHTSxZQUFZLENBQUNOLEtBQUQsRUFBUU8sYUFBUixDQUFaLENBQW1DSixNQUF0QyxFQUE4QztBQUMxQ2pCLFFBQUFBLEtBQUssR0FBRyxJQUFSO0FBQ0EsZUFBT29CLFlBQVksQ0FBQ04sS0FBRCxFQUFRTyxhQUFSLENBQW5CO0FBQ0g7O0FBQ0QsYUFBT0QsWUFBWSxDQUFDTixLQUFELEVBQVFPLGFBQVIsQ0FBbkI7QUFDSCxLQU5tQixDQUFwQjtBQU9BLFdBQU87QUFBQ3RCLE1BQUFBLFdBQVcsRUFBWEEsV0FBRDtBQUFjQyxNQUFBQSxLQUFLLEVBQUxBO0FBQWQsS0FBUDtBQUNQOztBQUVELHNDQUNRRSxrQkFBa0IsQ0FBQ0QsVUFEM0IsSUFDdUNMLEtBRHZDLEVBQzhDUSxlQUQ5QyxFQUMrRE0sZUFEL0Q7QUFJSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVZhbGlkYXRpb24ocGFyYW1zKSB7XHJcblxyXG4gICAgLy8gY29uc3QgW2lzUmVuZGVyLCBzZXRJc1JlbmRlcl0gPSB1c2VTdGF0ZShpc1JlYWN0aXZpdHlWYWxkaWF0aW9uKTtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUocGFyYW1zKTtcclxuICAgIGNvbnN0IFt2YWxpZGF0aW9uUmVzcG9uc2UsIHNldFZhbGlkYXRpb25SZXNwb25zZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBlcnJvckZpZWxkcywgZXJyb3IgfSA9IF9nZXRGaWVsZHMocGFyYW1zLCB0cnVlKTtcclxuICAgICAgICByZXR1cm4ge2Vycm9yLCB2YWxpZGF0aW9uOiBlcnJvckZpZWxkc31cclxuICAgIH0pXHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0VmFsdWUoKHByZXYpID0+ICh7Li4ucHJldiwgW2V2ZW50Py50YXJnZXQ/Lm5hbWVdOiB7Li4ucHJldltldmVudD8udGFyZ2V0Py5uYW1lXSwgdmFsdWU6IGV2ZW50Py50YXJnZXQ/LnZhbHVlIH0gfSkpXHJcbiAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnRWYWxpZGF0aW9uKGN1c3RvbUZ1bmMpIHtcclxuICAgICAgICBjb25zdCB7IGVycm9yRmllbGRzLCBlcnJvciB9ID0gX2dldEZpZWxkcyh2YWx1ZSk7XHJcbiAgICAgICAgc2V0VmFsaWRhdGlvblJlc3BvbnNlKChwcikgPT4gKHsuLi5wciwgZXJyb3IsIHZhbGlkYXRpb246IGVycm9yRmllbGRzfSkpO1xyXG4gICAgICAgIHJldHVybiBjdXN0b21GdW5jKGVycm9yRmllbGRzLCBlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWF4TGVuZ3RoVmFsaWRhdGlvbihmaWVsZCkge1xyXG4gICAgICAgIGlmKGZpZWxkPy5tYXhMZW5ndGggPCBmaWVsZC52YWx1ZT8ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZpZWxkID0gey4uLmZpZWxkLCBlcnJvcnM6IGAke2ZpZWxkLmVycm9ycy5tYXhMZW5ndGh9ICR7ZmllbGQubWF4TGVuZ3RofWB9O1xyXG4gICAgICAgICAgICByZXR1cm4gZmllbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpZWxkID0gey4uLmZpZWxkLCBlcnJvcnM6ICcnfVxyXG4gICAgICAgIHJldHVybiBmaWVsZDsgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWluTGVuZ3RoVmFsaWRhdGlvbihmaWVsZCkge1xyXG4gICAgICAgIGlmIChmaWVsZD8ubWluTGVuZ3RoID4gZmllbGQudmFsdWU/Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmaWVsZCA9IHsuLi5maWVsZCwgZXJyb3JzOiBgJHtmaWVsZD8uZXJyb3JzPy5taW5MZW5ndGh9ICR7ZmllbGQ/Lm1pbkxlbmd0aH1gfTtcclxuICAgICAgICAgICAgcmV0dXJuIGZpZWxkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaWVsZCA9IHsuLi5maWVsZCwgZXJyb3JzOiAnJ31cclxuICAgICAgICByZXR1cm4gZmllbGQ7IFxyXG4gICAgfVxyXG4gXHJcbiAgICBmdW5jdGlvbiBfY2hlY2tGaWVsZHMoZmllbGQsIGlzRmlyc3RSZW5kZXIpIHtcclxuXHJcbiAgICAgICAgaWYoZmllbGQ/LnR5cGUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzTm90TnVtYmVyID0gaXNOYU4oTnVtYmVyKGZpZWxkLnZhbHVlKSlcclxuXHJcbiAgICAgICAgICAgIGlmKGlzTm90TnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA9IHsuLi5maWVsZCwgZXJyb3JzOiBmaWVsZC5lcnJvcnMuaXNOdW1iZXJ9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpZWxkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihtYXhMZW5ndGhWYWxpZGF0aW9uKGZpZWxkKS5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYXhMZW5ndGhWYWxpZGF0aW9uKGZpZWxkKTsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG1pbkxlbmd0aFZhbGlkYXRpb24oZmllbGQpLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1pbkxlbmd0aFZhbGlkYXRpb24oZmllbGQpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIWZpZWxkPy52YWx1ZSAmJiAhaXNGaXJzdFJlbmRlciAmJiBmaWVsZC5yZXF1aXJlZCkge1xyXG4gICAgICAgICAgICBmaWVsZCA9IHsuLi5maWVsZCwgZXJyb3JzOiBmaWVsZC5lcnJvcnMudmFsdWVfZX07XHJcbiAgICAgICAgICAgIHJldHVybiBmaWVsZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZmllbGQ/LnJlZ2V4cCAmJiBmaWVsZD8udmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZmllbGQgPSB7Li4uZmllbGQsIGVycm9yczogZmllbGQucmVnZXhwLnRlc3QoZmllbGQudmFsdWUpID8gJycgOiBmaWVsZD8uZXJyb3JzPy5yZWdleHB9O1xyXG4gICAgICAgICAgICByZXR1cm4gZmllbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG1heExlbmd0aFZhbGlkYXRpb24oZmllbGQpLmVycm9ycykge1xyXG4gICAgICAgICAgICByZXR1cm4gbWF4TGVuZ3RoVmFsaWRhdGlvbihmaWVsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG1pbkxlbmd0aFZhbGlkYXRpb24oZmllbGQpLmVycm9ycykge1xyXG4gICAgICAgICAgICByZXR1cm4gbWluTGVuZ3RoVmFsaWRhdGlvbihmaWVsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpZWxkID0gey4uLmZpZWxkLCBlcnJvcnM6ICcnfVxyXG4gICAgICAgIHJldHVybiBmaWVsZDtcclxuICAgIH0gXHJcblxyXG4gICAgZnVuY3Rpb24gX2dldEZpZWxkcyAocGFyYW1zLCBpc0ZpcnN0UmVuZGVyKSB7XHJcbiAgICAgICAgICAgIGxldCBlcnJvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZHMgPSBPYmplY3QudmFsdWVzKHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yRmllbGRzID0gZmllbGRzLm1hcCgoZmllbGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKF9jaGVja0ZpZWxkcyhmaWVsZCwgaXNGaXJzdFJlbmRlcikuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfY2hlY2tGaWVsZHMoZmllbGQsIGlzRmlyc3RSZW5kZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jaGVja0ZpZWxkcyhmaWVsZCwgaXNGaXJzdFJlbmRlcilcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3JGaWVsZHMsIGVycm9yfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgWy4uLnZhbGlkYXRpb25SZXNwb25zZS52YWxpZGF0aW9uLCB2YWx1ZSwgb25DaGFuZ2VIYW5kbGVyLCBzdGFydFZhbGlkYXRpb25dXHJcbiAgICApXHJcbiAgICBcclxufSJdfQ==