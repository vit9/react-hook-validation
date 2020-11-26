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
        errors: field.errors.value
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1c2VWYWxpZGF0aW9uIiwicGFyYW1zIiwidmFsdWUiLCJzZXRWYWx1ZSIsIl9nZXRGaWVsZHMiLCJlcnJvckZpZWxkcyIsImVycm9yIiwidmFsaWRhdGlvbiIsInZhbGlkYXRpb25SZXNwb25zZSIsInNldFZhbGlkYXRpb25SZXNwb25zZSIsIm9uQ2hhbmdlSGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwcmV2IiwidGFyZ2V0IiwibmFtZSIsInN0YXJ0VmFsaWRhdGlvbiIsImN1c3RvbUZ1bmMiLCJwciIsIm1heExlbmd0aFZhbGlkYXRpb24iLCJmaWVsZCIsIm1heExlbmd0aCIsImxlbmd0aCIsImVycm9ycyIsIm1pbkxlbmd0aFZhbGlkYXRpb24iLCJtaW5MZW5ndGgiLCJfY2hlY2tGaWVsZHMiLCJpc0ZpcnN0UmVuZGVyIiwidHlwZSIsImlzTm90TnVtYmVyIiwiaXNOYU4iLCJOdW1iZXIiLCJpc051bWJlciIsInJlcXVpcmVkIiwicmVnZXhwIiwidGVzdCIsImZpZWxkcyIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2UsU0FBU0EsYUFBVCxDQUF1QkMsTUFBdkIsRUFBK0I7QUFFMUM7QUFGMEMsa0JBR2hCLHFCQUFTQSxNQUFULENBSGdCO0FBQUE7QUFBQSxNQUduQ0MsS0FIbUM7QUFBQSxNQUc1QkMsUUFINEI7O0FBQUEsbUJBSVUscUJBQVMsWUFBTTtBQUFBLHNCQUNoQ0MsVUFBVSxDQUFDSCxNQUFELEVBQVMsSUFBVCxDQURzQjtBQUFBLFFBQ3ZESSxXQUR1RCxlQUN2REEsV0FEdUQ7QUFBQSxRQUMxQ0MsS0FEMEMsZUFDMUNBLEtBRDBDOztBQUUvRCxXQUFPO0FBQUNBLE1BQUFBLEtBQUssRUFBTEEsS0FBRDtBQUFRQyxNQUFBQSxVQUFVLEVBQUVGO0FBQXBCLEtBQVA7QUFDSCxH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QSxLQUFQO0FBQWNHLE1BQUFBLE1BQU0sRUFBRTtBQUF0QixNQUFMO0FBQ0EsV0FBT0gsS0FBUDtBQUNIOztBQUVELFdBQVNoQixVQUFULENBQXFCSCxNQUFyQixFQUE2QjBCLGFBQTdCLEVBQTRDO0FBQ3BDLFFBQUlyQixLQUFLLEdBQUcsS0FBWjtBQUNBLFFBQU04QixNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjckMsTUFBZCxDQUFmO0FBQ0EsUUFBTUksV0FBVyxHQUFHK0IsTUFBTSxDQUFDRyxHQUFQLENBQVcsVUFBQ25CLEtBQUQsRUFBVztBQUN0QyxVQUFHTSxZQUFZLENBQUNOLEtBQUQsRUFBUU8sYUFBUixDQUFaLENBQW1DSixNQUF0QyxFQUE4QztBQUMxQ2pCLFFBQUFBLEtBQUssR0FBRyxJQUFSO0FBQ0EsZUFBT29CLFlBQVksQ0FBQ04sS0FBRCxFQUFRTyxhQUFSLENBQW5CO0FBQ0g7O0FBQ0QsYUFBT0QsWUFBWSxDQUFDTixLQUFELEVBQVFPLGFBQVIsQ0FBbkI7QUFDSCxLQU5tQixDQUFwQjtBQU9BLFdBQU87QUFBQ3RCLE1BQUFBLFdBQVcsRUFBWEEsV0FBRDtBQUFjQyxNQUFBQSxLQUFLLEVBQUxBO0FBQWQsS0FBUDtBQUNQOztBQUVELHNDQUNRRSxrQkFBa0IsQ0FBQ0QsVUFEM0IsSUFDdUNMLEtBRHZDLEVBQzhDUSxlQUQ5QyxFQUMrRE0sZUFEL0Q7QUFJSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVZhbGlkYXRpb24ocGFyYW1zKSB7XHJcblxyXG4gICAgLy8gY29uc3QgW2lzUmVuZGVyLCBzZXRJc1JlbmRlcl0gPSB1c2VTdGF0ZShpc1JlYWN0aXZpdHlWYWxkaWF0aW9uKTtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUocGFyYW1zKTtcclxuICAgIGNvbnN0IFt2YWxpZGF0aW9uUmVzcG9uc2UsIHNldFZhbGlkYXRpb25SZXNwb25zZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBlcnJvckZpZWxkcywgZXJyb3IgfSA9IF9nZXRGaWVsZHMocGFyYW1zLCB0cnVlKTtcclxuICAgICAgICByZXR1cm4ge2Vycm9yLCB2YWxpZGF0aW9uOiBlcnJvckZpZWxkc31cclxuICAgIH0pXHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0VmFsdWUoKHByZXYpID0+ICh7Li4ucHJldiwgW2V2ZW50Py50YXJnZXQ/Lm5hbWVdOiB7Li4ucHJldltldmVudD8udGFyZ2V0Py5uYW1lXSwgdmFsdWU6IGV2ZW50Py50YXJnZXQ/LnZhbHVlIH0gfSkpXHJcbiAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnRWYWxpZGF0aW9uKGN1c3RvbUZ1bmMpIHtcclxuICAgICAgICBjb25zdCB7IGVycm9yRmllbGRzLCBlcnJvciB9ID0gX2dldEZpZWxkcyh2YWx1ZSk7XHJcbiAgICAgICAgc2V0VmFsaWRhdGlvblJlc3BvbnNlKChwcikgPT4gKHsuLi5wciwgZXJyb3IsIHZhbGlkYXRpb246IGVycm9yRmllbGRzfSkpO1xyXG4gICAgICAgIHJldHVybiBjdXN0b21GdW5jKGVycm9yRmllbGRzLCBlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWF4TGVuZ3RoVmFsaWRhdGlvbihmaWVsZCkge1xyXG4gICAgICAgIGlmKGZpZWxkPy5tYXhMZW5ndGggPCBmaWVsZC52YWx1ZT8ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZpZWxkID0gey4uLmZpZWxkLCBlcnJvcnM6IGAke2ZpZWxkLmVycm9ycy5tYXhMZW5ndGh9ICR7ZmllbGQubWF4TGVuZ3RofWB9O1xyXG4gICAgICAgICAgICByZXR1cm4gZmllbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpZWxkID0gey4uLmZpZWxkLCBlcnJvcnM6ICcnfVxyXG4gICAgICAgIHJldHVybiBmaWVsZDsgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWluTGVuZ3RoVmFsaWRhdGlvbihmaWVsZCkge1xyXG4gICAgICAgIGlmIChmaWVsZD8ubWluTGVuZ3RoID4gZmllbGQudmFsdWU/Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmaWVsZCA9IHsuLi5maWVsZCwgZXJyb3JzOiBgJHtmaWVsZD8uZXJyb3JzPy5taW5MZW5ndGh9ICR7ZmllbGQ/Lm1pbkxlbmd0aH1gfTtcclxuICAgICAgICAgICAgcmV0dXJuIGZpZWxkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaWVsZCA9IHsuLi5maWVsZCwgZXJyb3JzOiAnJ31cclxuICAgICAgICByZXR1cm4gZmllbGQ7IFxyXG4gICAgfVxyXG4gXHJcbiAgICBmdW5jdGlvbiBfY2hlY2tGaWVsZHMoZmllbGQsIGlzRmlyc3RSZW5kZXIpIHtcclxuXHJcbiAgICAgICAgaWYoZmllbGQ/LnR5cGUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzTm90TnVtYmVyID0gaXNOYU4oTnVtYmVyKGZpZWxkLnZhbHVlKSlcclxuXHJcbiAgICAgICAgICAgIGlmKGlzTm90TnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA9IHsuLi5maWVsZCwgZXJyb3JzOiBmaWVsZC5lcnJvcnMuaXNOdW1iZXJ9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpZWxkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihtYXhMZW5ndGhWYWxpZGF0aW9uKGZpZWxkKS5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYXhMZW5ndGhWYWxpZGF0aW9uKGZpZWxkKTsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG1pbkxlbmd0aFZhbGlkYXRpb24oZmllbGQpLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1pbkxlbmd0aFZhbGlkYXRpb24oZmllbGQpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIWZpZWxkPy52YWx1ZSAmJiAhaXNGaXJzdFJlbmRlciAmJiBmaWVsZC5yZXF1aXJlZCkge1xyXG4gICAgICAgICAgICBmaWVsZCA9IHsuLi5maWVsZCwgZXJyb3JzOiBmaWVsZC5lcnJvcnMudmFsdWV9O1xyXG4gICAgICAgICAgICByZXR1cm4gZmllbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGZpZWxkPy5yZWdleHAgJiYgZmllbGQ/LnZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZpZWxkID0gey4uLmZpZWxkLCBlcnJvcnM6IGZpZWxkLnJlZ2V4cC50ZXN0KGZpZWxkLnZhbHVlKSA/ICcnIDogZmllbGQ/LmVycm9ycz8ucmVnZXhwfTtcclxuICAgICAgICAgICAgcmV0dXJuIGZpZWxkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihtYXhMZW5ndGhWYWxpZGF0aW9uKGZpZWxkKS5lcnJvcnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1heExlbmd0aFZhbGlkYXRpb24oZmllbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihtaW5MZW5ndGhWYWxpZGF0aW9uKGZpZWxkKS5lcnJvcnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1pbkxlbmd0aFZhbGlkYXRpb24oZmllbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaWVsZCA9IHsuLi5maWVsZCwgZXJyb3JzOiAnJ31cclxuICAgICAgICByZXR1cm4gZmllbGQ7XHJcbiAgICB9IFxyXG5cclxuICAgIGZ1bmN0aW9uIF9nZXRGaWVsZHMgKHBhcmFtcywgaXNGaXJzdFJlbmRlcikge1xyXG4gICAgICAgICAgICBsZXQgZXJyb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc3QgZmllbGRzID0gT2JqZWN0LnZhbHVlcyhwYXJhbXMpO1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvckZpZWxkcyA9IGZpZWxkcy5tYXAoKGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihfY2hlY2tGaWVsZHMoZmllbGQsIGlzRmlyc3RSZW5kZXIpLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NoZWNrRmllbGRzKGZpZWxkLCBpc0ZpcnN0UmVuZGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBfY2hlY2tGaWVsZHMoZmllbGQsIGlzRmlyc3RSZW5kZXIpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4ge2Vycm9yRmllbGRzLCBlcnJvcn1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFsuLi52YWxpZGF0aW9uUmVzcG9uc2UudmFsaWRhdGlvbiwgdmFsdWUsIG9uQ2hhbmdlSGFuZGxlciwgc3RhcnRWYWxpZGF0aW9uXVxyXG4gICAgKVxyXG4gICAgXHJcbn0iXX0=