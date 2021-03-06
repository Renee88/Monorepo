"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Room = _interopRequireDefault(require("./Room"));

require("./Rooms.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    master: {
      backgroundColor: '#DFE0E2'
    }
  };
});

var Rooms = function Rooms() {
  var classes = useStyles();

  var _ref = _react.useState < Array < ChosenRoomType >> [],
      _ref2 = _slicedToArray(_ref, 2),
      rooms = _ref2[0],
      setRooms = _ref2[1];

  var _ref3 = _react.useState < ChosenRoomType > {},
      _ref4 = _slicedToArray(_ref3, 2),
      chosenRoom = _ref4[0],
      setChosenRoom = _ref4[1];

  (0, _react.useEffect)(function () {
    setRooms([{
      name: 'Room1',
      id: 1,
      numOfPeople: 10
    }, {
      name: 'Room2',
      id: 2,
      numOfPeople: 10
    }, {
      name: 'Room3',
      id: 3,
      numOfPeople: 10
    }]);
  }, []);

  var displayChosenRoom = function displayChosenRoom(id) {
    return function () {
      var chosenRoom = rooms.find(function (room) {
        return room.id === id;
      });
      setChosenRoom(chosenRoom);
    };
  };

  return _react.default.createElement("div", {
    className: "master-detail"
  }, _react.default.createElement(_Grid.default, {
    container: true,
    className: "master-detail-container",
    direction: "row",
    alignItems: "stretch"
  }, _react.default.createElement(_Grid.default, {
    item: true,
    sm: 3,
    className: classes.master
  }, rooms.map(function (room) {
    return _react.default.createElement(_core.Card, {
      key: room.id,
      className: "detail-card",
      onClick: displayChosenRoom(room.id)
    }, _react.default.createElement(_core.CardActionArea, null, _react.default.createElement(_core.CardContent, null, _react.default.createElement(_core.Typography, null, room.name))));
  })), _react.default.createElement(_Grid.default, {
    item: true,
    sm: 9,
    className: "detail"
  }, _react.default.createElement(_Paper.default, {
    square: true
  }, _react.default.createElement(_Room.default, {
    chosenRoom: chosenRoom
  })))));
};

var _default = Rooms;
exports.default = _default;