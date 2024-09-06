import React, { useRef, useState, useEffect } from 'react';

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

var W3CWebSocket = require('websocket').w3cwebsocket;
var WebSocketNext = function WebSocketNext(props) {
  var didMountRef = useRef(false);
  var _useState = useState(new W3CWebSocket(props.url)),
    ws = _useState[0],
    setWS = _useState[1];
  var _useState2 = useState(1),
    attempts = _useState2[0],
    setAttempts = _useState2[1];
  var _useState3 = useState(props.reconnect),
    reconnect = _useState3[0],
    setReconnect = _useState3[1];
  var _useState4 = useState(-1),
    timeoutID = _useState4[0],
    setTimeoutID = _useState4[1];
  useEffect(function () {
    if (!didMountRef.current) {
      didMountRef.current = true;
      setupWebsocket();
    } else {
      return function () {
        setReconnect(false);
        clearTimeout(timeoutID);
        ws.close();
      };
    }
  }, []);
  var setupWebsocket = function setupWebsocket() {
    ws.onopen = function () {
      if (typeof props.onOpen === 'function') props.onOpen();
    };
    ws.onerror = function (e) {
      if (typeof props.onError === 'function') props.onError(e);
    };
    ws.onmessage = function (evt) {
      props.onMessage(evt.data);
    };
    ws.onclose = function (evt) {
      if (typeof props.onClose === 'function') {
        props.onClose(evt.code, evt.reason);
      }
      if (reconnect) {
        var tid = setTimeout(function () {
          setAttempts(attempts + 1);
          setWS(new W3CWebSocket(props.url));
          setupWebsocket();
        }, props.reconnectIntervalInMilliSeconds || 3000);
        setTimeoutID(tid);
      }
    };
  };
  return /*#__PURE__*/React.createElement("div", null);
};

var W3CWebSocket$1 = require('websocket').w3cwebsocket;
var WebSocket = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(WebSocket, _React$Component);
  function WebSocket(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.state = {
      ws: new W3CWebSocket$1(_this.props.url),
      attempts: 1
    };
    _this.sendMessage = _this.sendMessage.bind(_assertThisInitialized(_this));
    _this.setupWebsocket = _this.setupWebsocket.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = WebSocket.prototype;
  _proto.logging = function logging(logline) {
    if (this.props.debug === true) {
      console.log(logline);
    }
  };
  _proto.generateInterval = function generateInterval(k) {
    if (this.props.reconnectIntervalInMilliSeconds > 0) {
      return this.props.reconnectIntervalInMilliSeconds;
    }
    return Math.min(30, Math.pow(2, k) - 1) * 1000;
  };
  _proto.setupWebsocket = function setupWebsocket() {
    var _this2 = this;
    var websocket = this.state.ws;
    websocket.onopen = function () {
      _this2.logging('Websocket connected...');
      if (typeof _this2.props.onOpen === 'function') _this2.props.onOpen();
    };
    websocket.onerror = function (e) {
      if (typeof _this2.props.onError === 'function') _this2.props.onError(e);
    };
    websocket.onmessage = function (evt) {
      _this2.props.onMessage(evt.data);
    };
    this.shouldReconnect = this.props.reconnect;
    websocket.onclose = function (evt) {
      _this2.logging("Websocket disconnected,the reason: " + evt.reason + ",the code: " + evt.code);
      if (typeof _this2.props.onClose === 'function') _this2.props.onClose(evt.code, evt.reason);
      if (_this2.shouldReconnect) {
        var time = _this2.generateInterval(_this2.state.attempts);
        _this2.timeoutID = setTimeout(function () {
          _this2.setState({
            attempts: _this2.state.attempts + 1
          });
          _this2.setState({
            ws: new W3CWebSocket$1(_this2.props.url)
          });
          _this2.setupWebsocket();
        }, time);
      }
    };
  };
  _proto.componentDidMount = function componentDidMount() {
    var childRef = this.props.childRef;
    childRef && childRef(this);
    this.setupWebsocket();
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    var childRef = this.props.childRef;
    childRef && childRef(undefined);
    this.shouldReconnect = false;
    clearTimeout(this.timeoutID);
    var websocket = this.state.ws;
    websocket.close();
  };
  _proto.sendMessage = function sendMessage(message) {
    var websocket = this.state.ws;
    websocket.send(message);
  };
  _proto.render = function render() {
    return /*#__PURE__*/React.createElement("div", null);
  };
  return WebSocket;
}(React.Component);

export { WebSocket, WebSocketNext };
//# sourceMappingURL=index.modern.js.map
