.directive('flowchart', function() {
  return {
    scope: {
      customerInfo: '=step',
      title: '=title'
    },
    templateUrl: 'flowchart_template.html'
  };
});