'use strict';

var mockGlobalCookies = {};
global.cookies = mockGlobalCookies;
module.exports = mockGlobalCookies;
