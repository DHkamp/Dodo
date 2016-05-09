(function() {
  'use strict';

  var navList,
      navTrigger;

  function toggleNavigation()
  {
    navList.classList.toggle('dodo-Navigation-linkList--visible')
  }

  function setLinksTarget()
  {
    var hostRx  = new RegExp(location.host);
    var links   = navList.getElementsByTagName('a');

    for (var i = 0, j = links.length; i < j; i++)
    {
      var item = links[i];
      if(!hostRx.test(item.getAttribute('href')))
      {
        item.setAttribute('target', '_blank');
      }
    }
  }

  document.addEventListener('readystatechange', function() {
    if(document.readyState === 'complete')
    {
      navList    = document.getElementById('dodoNavigationLinkList');
      navTrigger = document.getElementById('dodoNavigationTrigger');

      navTrigger.addEventListener('click', toggleNavigation, false);

      setLinksTarget();

      //Contents are initially hidden, show if all js has processed.
      document.body.classList.add('isVisible');
    }
  });

}());