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
    customFunc(errorFields);
    if (!error) return customFunc(errorFields);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1c2VWYWxpZGF0aW9uIiwicGFyYW1zIiwidmFsdWUiLCJzZXRWYWx1ZSIsIl9nZXRGaWVsZHMiLCJlcnJvckZpZWxkcyIsImVycm9yIiwidmFsaWRhdGlvbiIsInZhbGlkYXRpb25SZXNwb25zZSIsInNldFZhbGlkYXRpb25SZXNwb25zZSIsIm9uQ2hhbmdlSGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwcmV2IiwidGFyZ2V0IiwibmFtZSIsInN0YXJ0VmFsaWRhdGlvbiIsImN1c3RvbUZ1bmMiLCJwciIsIm1heExlbmd0aFZhbGlkYXRpb24iLCJmaWVsZCIsIm1heExlbmd0aCIsImxlbmd0aCIsImVycm9ycyIsIm1pbkxlbmd0aFZhbGlkYXRpb24iLCJtaW5MZW5ndGgiLCJfY2hlY2tGaWVsZHMiLCJpc0ZpcnN0UmVuZGVyIiwidHlwZSIsImlzTm90TnVtYmVyIiwiaXNOYU4iLCJOdW1iZXIiLCJpc051bWJlciIsInJlcXVpcmVkIiwidmFsdWVfZSIsInJlZ2V4cCIsInRlc3QiLCJmaWVsZHMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdlLFNBQVNBLGFBQVQsQ0FBdUJDLE1BQXZCLEVBQStCO0FBRTFDO0FBRjBDLGtCQUdoQixxQkFBU0EsTUFBVCxDQUhnQjtBQUFBO0FBQUEsTUFHbkNDLEtBSG1DO0FBQUEsTUFHNUJDLFFBSDRCOztBQUFBLG1CQUlVLHFCQUFTLFlBQU07QUFBQSxzQkFDaENDLFVBQVUsQ0FBQ0gsTUFBRCxFQUFTLElBQVQsQ0FEc0I7QUFBQSxRQUN2REksV0FEdUQsZUFDdkRBLFdBRHVEO0FBQUEsUUFDMUNDLEtBRDBDLGVBQzFDQSxLQUQwQzs7QUFFL0QsV0FBTztBQUFDQSxNQUFBQSxLQUFLLEVBQUxBLEtBQUQ7QUFBUUMsTUFBQUEsVUFBVSxFQUFFRjtBQUFwQixL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bUJBQW1CLENBQUNKLEtBQUQsQ0FBMUI7QUFDSDs7QUFDREEsSUFBQUEsS0FBSyxtQ0FBT0EsS0FBUDtBQUFjRyxNQUFBQSxNQUFNLEVBQUU7QUFBdEIsTUFBTDtBQUNBLFdBQU9ILEtBQVA7QUFDSDs7QUFFRCxXQUFTaEIsVUFBVCxDQUFxQkgsTUFBckIsRUFBNkIwQixhQUE3QixFQUE0QztBQUNwQyxRQUFJckIsS0FBSyxHQUFHLEtBQVo7QUFDQSxRQUFNK0IsTUFBTSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY3RDLE1BQWQsQ0FBZjtBQUNBLFFBQU1JLFdBQVcsR0FBR2dDLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFVBQUNwQixLQUFELEVBQVc7QUFDdEMsVUFBR00sWUFBWSxDQUFDTixLQUFELEVBQVFPLGFBQVIsQ0FBWixDQUFtQ0osTUFBdEMsRUFBOEM7QUFDMUNqQixRQUFBQSxLQUFLLEdBQUcsSUFBUjtBQUNBLGVBQU9vQixZQUFZLENBQUNOLEtBQUQsRUFBUU8sYUFBUixDQUFuQjtBQUNIOztBQUNELGFBQU9ELFlBQVksQ0FBQ04sS0FBRCxFQUFRTyxhQUFSLENBQW5CO0FBQ0gsS0FObUIsQ0FBcEI7QUFPQSxXQUFPO0FBQUN0QixNQUFBQSxXQUFXLEVBQVhBLFdBQUQ7QUFBY0MsTUFBQUEsS0FBSyxFQUFMQTtBQUFkLEtBQVA7QUFDUDs7QUFFRCxzQ0FDUUUsa0JBQWtCLENBQUNELFVBRDNCLElBQ3VDTCxLQUR2QyxFQUM4Q1EsZUFEOUMsRUFDK0RNLGVBRC9EO0FBSUgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VWYWxpZGF0aW9uKHBhcmFtcykge1xyXG5cclxuICAgIC8vIGNvbnN0IFtpc1JlbmRlciwgc2V0SXNSZW5kZXJdID0gdXNlU3RhdGUoaXNSZWFjdGl2aXR5VmFsZGlhdGlvbik7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHBhcmFtcyk7XHJcbiAgICBjb25zdCBbdmFsaWRhdGlvblJlc3BvbnNlLCBzZXRWYWxpZGF0aW9uUmVzcG9uc2VdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZXJyb3JGaWVsZHMsIGVycm9yIH0gPSBfZ2V0RmllbGRzKHBhcmFtcywgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHtlcnJvciwgdmFsaWRhdGlvbjogZXJyb3JGaWVsZHN9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZUhhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldFZhbHVlKChwcmV2KSA9PiAoey4uLnByZXYsIFtldmVudD8udGFyZ2V0Py5uYW1lXTogey4uLnByZXZbZXZlbnQ/LnRhcmdldD8ubmFtZV0sIHZhbHVlOiBldmVudD8udGFyZ2V0Py52YWx1ZSB9IH0pKVxyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0VmFsaWRhdGlvbihjdXN0b21GdW5jKSB7XHJcbiAgICAgICAgY29uc3QgeyBlcnJvckZpZWxkcywgZXJyb3IgfSA9IF9nZXRGaWVsZHModmFsdWUpO1xyXG4gICAgICAgIHNldFZhbGlkYXRpb25SZXNwb25zZSgocHIpID0+ICh7Li4ucHIsIGVycm9yLCB2YWxpZGF0aW9uOiBlcnJvckZpZWxkc30pKTtcclxuICAgICAgICBjdXN0b21GdW5jKGVycm9yRmllbGRzKTtcclxuICAgICAgICBpZighZXJyb3IpIHJldHVybiBjdXN0b21GdW5jKGVycm9yRmllbGRzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYXhMZW5ndGhWYWxpZGF0aW9uKGZpZWxkKSB7XHJcbiAgICAgICAgaWYoZmllbGQ/Lm1heExlbmd0aCA8IGZpZWxkLnZhbHVlPy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZmllbGQgPSB7Li4uZmllbGQsIGVycm9yczogYCR7ZmllbGQuZXJyb3JzLm1heExlbmd0aH0gJHtmaWVsZC5tYXhMZW5ndGh9YH07XHJcbiAgICAgICAgICAgIHJldHVybiBmaWVsZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmllbGQgPSB7Li4uZmllbGQsIGVycm9yczogJyd9XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkOyBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtaW5MZW5ndGhWYWxpZGF0aW9uKGZpZWxkKSB7XHJcbiAgICAgICAgaWYgKGZpZWxkPy5taW5MZW5ndGggPiBmaWVsZC52YWx1ZT8ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZpZWxkID0gey4uLmZpZWxkLCBlcnJvcnM6IGAke2ZpZWxkPy5lcnJvcnM/Lm1pbkxlbmd0aH0gJHtmaWVsZD8ubWluTGVuZ3RofWB9O1xyXG4gICAgICAgICAgICByZXR1cm4gZmllbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpZWxkID0gey4uLmZpZWxkLCBlcnJvcnM6ICcnfVxyXG4gICAgICAgIHJldHVybiBmaWVsZDsgXHJcbiAgICB9XHJcbiBcclxuICAgIGZ1bmN0aW9uIF9jaGVja0ZpZWxkcyhmaWVsZCwgaXNGaXJzdFJlbmRlcikge1xyXG5cclxuICAgICAgICBpZihmaWVsZD8udHlwZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNOb3ROdW1iZXIgPSBpc05hTihOdW1iZXIoZmllbGQudmFsdWUpKVxyXG5cclxuICAgICAgICAgICAgaWYoaXNOb3ROdW1iZXIpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkID0gey4uLmZpZWxkLCBlcnJvcnM6IGZpZWxkLmVycm9ycy5pc051bWJlcn07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmllbGQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG1heExlbmd0aFZhbGlkYXRpb24oZmllbGQpLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1heExlbmd0aFZhbGlkYXRpb24oZmllbGQpOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYobWluTGVuZ3RoVmFsaWRhdGlvbihmaWVsZCkuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWluTGVuZ3RoVmFsaWRhdGlvbihmaWVsZCk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighZmllbGQ/LnZhbHVlICYmICFpc0ZpcnN0UmVuZGVyICYmIGZpZWxkLnJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgIGZpZWxkID0gey4uLmZpZWxkLCBlcnJvcnM6IGZpZWxkLmVycm9ycy52YWx1ZV9lfTtcclxuICAgICAgICAgICAgcmV0dXJuIGZpZWxkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihmaWVsZD8ucmVnZXhwICYmIGZpZWxkPy52YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmaWVsZCA9IHsuLi5maWVsZCwgZXJyb3JzOiBmaWVsZC5yZWdleHAudGVzdChmaWVsZC52YWx1ZSkgPyAnJyA6IGZpZWxkPy5lcnJvcnM/LnJlZ2V4cH07XHJcbiAgICAgICAgICAgIHJldHVybiBmaWVsZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobWF4TGVuZ3RoVmFsaWRhdGlvbihmaWVsZCkuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXhMZW5ndGhWYWxpZGF0aW9uKGZpZWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobWluTGVuZ3RoVmFsaWRhdGlvbihmaWVsZCkuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtaW5MZW5ndGhWYWxpZGF0aW9uKGZpZWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmllbGQgPSB7Li4uZmllbGQsIGVycm9yczogJyd9XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkO1xyXG4gICAgfSBcclxuXHJcbiAgICBmdW5jdGlvbiBfZ2V0RmllbGRzIChwYXJhbXMsIGlzRmlyc3RSZW5kZXIpIHtcclxuICAgICAgICAgICAgbGV0IGVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkcyA9IE9iamVjdC52YWx1ZXMocGFyYW1zKTtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JGaWVsZHMgPSBmaWVsZHMubWFwKChmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoX2NoZWNrRmllbGRzKGZpZWxkLCBpc0ZpcnN0UmVuZGVyKS5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jaGVja0ZpZWxkcyhmaWVsZCwgaXNGaXJzdFJlbmRlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NoZWNrRmllbGRzKGZpZWxkLCBpc0ZpcnN0UmVuZGVyKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHtlcnJvckZpZWxkcywgZXJyb3J9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBbLi4udmFsaWRhdGlvblJlc3BvbnNlLnZhbGlkYXRpb24sIHZhbHVlLCBvbkNoYW5nZUhhbmRsZXIsIHN0YXJ0VmFsaWRhdGlvbl1cclxuICAgIClcclxuICAgIFxyXG59Il19