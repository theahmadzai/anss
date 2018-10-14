(function ($$1) {
  'use strict';

  $$1 = $$1 && $$1.hasOwnProperty('default') ? $$1['default'] : $$1;

  $$1.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $$1('meta[name="csrf-token"]').attr('content')
    }
  });

  $('#top-line').css({
    width: '100%',
    height: '5px',
    background: 'black'
  });

}($));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJyZXNvdXJjZXMvc2NyaXB0cy9jc3JmLmpzIiwicmVzb3VyY2VzL3NjcmlwdHMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuJC5hamF4U2V0dXAoe1xuICBoZWFkZXJzOiB7XG4gICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JylcbiAgfVxufSlcbiIsImltcG9ydCAnLi9jc3JmJ1xuXG4kKCcjdG9wLWxpbmUnKS5jc3Moe1xuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICc1cHgnLFxuICBiYWNrZ3JvdW5kOiAnYmxhY2snXG59KVxuIl0sIm5hbWVzIjpbIiQiLCJhamF4U2V0dXAiLCJoZWFkZXJzIiwiYXR0ciIsImNzcyIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQUEsS0FBQyxDQUFDQyxTQUFGLENBQVk7RUFDVkMsRUFBQUEsT0FBTyxFQUFFO0VBQ1Asb0JBQWdCRixHQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QkcsSUFBN0IsQ0FBa0MsU0FBbEM7RUFEVDtFQURDLENBQVo7O0VDQUFILENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZUksR0FBZixDQUFtQjtFQUNqQkMsRUFBQUEsS0FBSyxFQUFFLE1BRFU7RUFFakJDLEVBQUFBLE1BQU0sRUFBRSxLQUZTO0VBR2pCQyxFQUFBQSxVQUFVLEVBQUU7RUFISyxDQUFuQjs7OzsifQ==
