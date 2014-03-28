Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["components/leaflet-map"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div id=\"map\" class=\"row map\"></div>\n");
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("<div class=\"row\">\n      <h1 class=\"headline\">Plan it. Do it. Share it.</h1>\n      <p>Modern Fieldtrip is an online platform that allows people to easily plan trips together.</p>\n    </div>");
  }

  data.buffer.push("<a class=\"logo-con \"  href=\"home.html\"><img class=\"img-responsive logo-dash logo-home\" src=\"public/images/logo_final_white-02.png\"></a>\n\n<div class=\"jumbotron\">\n  <div class=\"container\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "trips", options) : helperMissing.call(depth0, "link-to", "trips", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>\n <div class=\"row about trip-row\">\n  <div class=\"product-img col-md-6\">\n    <img src=\"public/images/mock-4.png\">\n  </div>\n  <div class=\"col-md-6 mockup-desc\">\n    <ul>\n      <li>Seamlessly create and edit an itinerary with friends.</li>\n      <li>Vote items up and down to assemble a list of destinations that appeals to everyone in your group.</li>\n      <li>Instantly access your itinerary from anywhere with your mobile phone using the Modern Field Trip mobile app.</li>\n      <li>Get up-to-date information on your destinations including Business Hours, Addresses and Directions.</li>\n    </ul>\n  </div>\n\n</div> \n<div class=\"container-fluid trip-section\">\n  <div class=\"row trip-row\">\n    <h1 class=\"recent-trips\">Recent Trips</h1>\n    <div class=\"trip-container col-md-4\">\n      <div class=\"trip\">\n        <div class=\"img-container-trips\">\n        <img class=\"img-responsive trip-img\"  src=\"public/images/lake-chelan.jpg\" alt=\"Chelan\">\n      </div>\n        <img class=\"profile\" src=\"public/images/profile.png\">\n        <h3>Lake Chelan</h3>\n        <h4>By Katie Daiger</h4>\n        <p>Praesent elementum ligula eget quam molestie eleifend. Donec posuere est et faucibus.</p>\n        <p class=\"category-field\">Fieldtrip</p>\n        <div class=\"fieldtrip-bar\"></div>\n      </div>\n    </div>\n    <div class=\"trip-container col-md-4\">\n      <div class=\"trip\">\n        <div class=\"img-container-trips\">\n        <img class=\"img-responsive trip-img\"  src=\"public/images/pumpkin-farm.jpg\" alt=\"mountain\">\n      </div>\n        <img class=\"profile\" src=\"public/images/profile-girl.png\">\n        <h3>Mountain Hike</h3>\n        <h4>By Amy Jones</h4>\n        <p>Praesent elementum ligula eget quam molestie eleifend. Donec posuere est et faucibus.</p> \n         <p class=\"category-field\">Fieldtrip</p>\n        <div class=\"fieldtrip-bar\"></div>\n      </div>\n    </div>\n    <div class=\"trip-container col-md-4\">\n      <div class=\"trip\">\n        <div class=\"img-container-trips\">\n        <img class=\"img-responsive trip-img\"  src=\"public/images/flower-field.jpg\" alt=\"flower\">\n      </div>\n        <img class=\"profile\" src=\"public/images/profile-man.png\">\n        <h3>Tulip Field</h3>\n        <h4>By Mike Drew</h4>\n        <p>Praesent elementum ligula eget quam molestie eleifend. Donec posuere est et faucibus.</p>\n         <p class=\"category-field\">Fieldtrip</p>\n        <div class=\"fieldtrip-bar\"></div> \n      </div>\n    </div>\n    <div class=\"trip-container col-md-4\">\n      <div class=\"trip\">\n        <div class=\"img-container-trips\">\n        <img class=\"img-responsive trip-img\"  src=\"public/images/kakao.jpg\" alt=\"flower\">\n      </div>\n        <img class=\"profile\" src=\"public/images/profile-man.png\">\n        <h3>The Best Spots</h3>\n        <h4>By Jed Welling</h4>\n        <p>Praesent elementum ligula eget quam molestie eleifend. Donec posuere est et faucibus.</p>\n         <p class=\"category-field\">Fieldtrip</p>\n        <div class=\"fieldtrip-bar\"></div> \n      </div>\n    </div>\n    <div class=\"trip-container col-md-4\">\n      <div class=\"trip\">\n        <div class=\"img-container-trips\">\n        <img class=\"img-responsive trip-img\"  src=\"public/images/Frye_museum.jpg\" alt=\"flower\">\n        </div>\n        <img class=\"profile\" src=\"public/images/profile.png\">\n        <h3>The Frye Museum Tour</h3>\n        <h4>By Mike Drew</h4>\n        <p>Praesent elementum ligula eget quam molestie eleifend. Donec posuere est et faucibus.</p>\n         <p class=\"category-field\">Fieldtrip</p>\n        <div class=\"fieldtrip-bar\"></div> \n      </div>\n    </div>\n    <div class=\"trip-container col-md-4\">\n      <div class=\"trip\">\n        <div class=\"img-container-trips\">\n        <img class=\"img-responsive trip-img\"  src=\"public/images/Town_Hall.jpg\" alt=\"flower\">\n        </div>\n        <img class=\"profile\" src=\"public/images/profile-girl.png\">\n        <h3>History Trip</h3>\n        <h4>By Mike Drew</h4>\n        <p>Praesent elementum ligula eget quam molestie eleifend. Donec posuere est et faucibus.</p>\n         <p class=\"category-field\">Fieldtrip</p>\n        <div class=\"fieldtrip-bar\"></div> \n      </div>\n    </div>\n  \n\n  </div>\n</div> \n<div class=\"container-fluid contact\">\n<h3>Made with love at Redesign Seattle Startup Weekend</h3>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"container\">\n  <div class='row center-block'>\n  <form role=\"form\">\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("email"),
    'class': ("form-control"),
    'id': ("email"),
    'placeholder': ("Enter email"),
    'value': ("email")
  },hashTypes:{'type': "STRING",'class': "STRING",'id': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'id': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'class': ("form-control"),
    'id': ("password"),
    'value': ("password"),
    'placeholder': ("Password")
  },hashTypes:{'type': "STRING",'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">Login</button>\n  </form>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["signup"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"container\">\n  <div class='row center-block'>\n  <form role=\"form\">\n    <div class=\"form-group\">\n      <label for=\"first_name\">First Name</label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("first_name"),
    'class': ("form-control"),
    'id': ("first_name"),
    'placeholder': ("Enter first name")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n    <div class=\"form-group\">\n      <label for=\"last_name\">Last Name</label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("last_name"),
    'class': ("form-control"),
    'id': ("last_name"),
    'placeholder': ("Enter last name")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("email"),
    'value': ("email"),
    'class': ("form-control"),
    'id': ("email"),
    'placeholder': ("Enter email")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("password"),
    'class': ("form-control"),
    'id': ("password"),
    'placeholder': ("Password")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password2\">Retype Password</label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("password2"),
    'class': ("form-control"),
    'id': ("password2"),
    'placeholder': ("Password")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "signup", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">Login</button>\n  </form>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["trip"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div class=\"card-list\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-id': ("name")
  },hashTypes:{'data-id': "ID"},hashContexts:{'data-id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      <img class=\"img-responsive card-img\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      <button class=\"add-button\">Add</button>\n      <div class=\"h-info\">\n        <h3>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n        <h4></h4>\n        <p>");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n      </div>\n      <div class=\"h-info-category\">\n        <p class=\"category\">location</p>\n        <div class=\"other-bar\"></div>\n      </div>\n      <div class=\"h-info-details\">\n        <ul>\n          <li class=\"hours\">Hours:</li>\n          <li class=\"days\"><span class=\"green\">M T W T</span> F S S</li>\n          <li class=\"price\">Price: <span class=\"green\">$$</span></li>\n          <li class=\"vote\">Votes: <span class=\"green\">3</span></li>\n        </ul>\n      </div>\n      </div>\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"container-fluid explore-section\">\n\n<div class=\"row trip-row explore map-extend\">\n  <div class=\"title\">\n    <h1>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n  </div>\n  \n  <div class=\"trip-container col-md-10 col-md-offset-1\">\n    \n    ");
  stack1 = helpers.each.call(depth0, "places", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>\n\n");
  data.buffer.push(escapeExpression((helper = helpers['leaflet-map'] || (depth0 && depth0['leaflet-map']),options={hash:{
    'location': ("location"),
    'places': ("places")
  },hashTypes:{'location': "ID",'places': "ID"},hashContexts:{'location': depth0,'places': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "leaflet-map", options))));
  data.buffer.push("\n</div> \n<div class=\"container-fluid contact\">\n<h3>Made with love at Redesign Seattle Startup Weekend</h3>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["trips"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "trip", "", options) : helperMissing.call(depth0, "link-to", "trip", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<a href=\"#\">");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>");
  return buffer;
  }

  data.buffer.push("\n<div class=\"container dashboard\" id=\"dashboard\">\n  <a   href=\"home.html\"><img class=\"img-responsive logo-dash\" src=\"public/images/logo_final_white-02.png\"></a>\n  <a class=\"user\" href=\"#\">\n    <div class=\"user-img\">\n      <img class=\"img-responsive\" src=\"public/images/profile-girl.png\">\n    </div>\n    <h3>Amy Jones</h3>\n  </a>\n  <div class=\"field-trips\">\n    <ul>\n      ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n  </div>\n</div>\n\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["trips/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  data.buffer.push("<div class=\"container-fluid explore-section\">\n<div class=\"row trip-row explore\">\n  <div class=\"trip-container col-md-4\">  \n    <div class=\"trip cards\">\n        <img class=\"img-responsive other-img\"  src=\"public/images/lake-chelan.jpg\" alt=\"Chelan\">\n        <button class=\"add-button\">Add</button>\n        <h3>Lake Chelan</h3>\n        <h5 class=\"location\"><img class=\"location-icon\" src=\"public/images/location-icon.png\"> Lake Chelan</h5>\n        <p>Praesent elementum ligula eget quam molestie eleifend. Donec posuere est et faucibus.\n        Praesent elementum ligul</p>\n        <p class=\"category\">location</p>\n        <div class=\"other-bar\"></div>\n      </div>\n  </div>\n\n  <div class=\"trip-container col-md-4\">  \n    <div class=\"trip cards\">\n        <img class=\"img-responsive other-img\"  src=\"public/images/lake-chelan.jpg\" alt=\"Chelan\">\n        <button class=\"add-button\">Add</button>\n        <h3>Lake Chelan</h3>\n        <h5 class=\"location\"><img class=\"location-icon\" src=\"public/images/location-icon.png\"> Lake Chelan</h5>\n        <p>Praesent elementum ligula eget quam molestie eleifend. Donec posuere est et faucibus.\n        Praesent elementum ligul</p>\n        <p class=\"category\">location</p>\n        <div class=\"other-bar\"></div>\n      </div>\n  </div>\n\n  <div class=\"trip-container col-md-4\">  \n    <div class=\"trip cards\">\n        <img class=\"img-responsive other-img\"  src=\"public/images/lake-chelan.jpg\" alt=\"Chelan\">\n        <button class=\"add-button\">Add</button>\n        <h3>Lake Chelan</h3>\n        <h5 class=\"location\"><img class=\"location-icon\" src=\"public/images/location-icon.png\"> Lake Chelan</h5>\n        <p>Praesent elementum ligula eget quam molestie eleifend. Donec posuere est et faucibus.\n        Praesent elementum ligul</p>\n        <p class=\"category\">location</p>\n        <div class=\"other-bar\"></div>\n      </div>\n  </div>\n\n  <div class=\"trip-container col-md-4\">  \n    <div class=\"trip cards\">\n        <img class=\"img-responsive other-img\"  src=\"public/images/lake-chelan.jpg\" alt=\"Chelan\">\n        <button class=\"add-button\">Add</button>\n        <h3>Lake Chelan</h3>\n        <h5 class=\"location\"><img class=\"location-icon\" src=\"public/images/location-icon.png\"> Lake Chelan</h5>\n        <p>Praesent elementum ligula eget quam molestie eleifend. Donec posuere est et faucibus.\n        Praesent elementum ligul</p>\n        <p class=\"category\">location</p>\n        <div class=\"other-bar\"></div>\n      </div>\n  </div>\n</div>\n</div> \n");
  return buffer;
  
});