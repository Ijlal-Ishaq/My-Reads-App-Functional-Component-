(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},21:function(e,t,a){e.exports=a(34)},32:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var o=a(1),n=a.n(o),l=a(19),r=a.n(l),s=a(4),c=a(5),i=a(8),d=a(6),m=a(9),u=(a(12),a(7)),g=a(0),h=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"app"},n.a.createElement("div",{className:"list-books"},n.a.createElement("div",{className:"list-books-title"},n.a.createElement("h1",null,"MyReads")),n.a.createElement("div",{className:"list-books-content"},n.a.createElement("div",null,n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},"Currently Reading"),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},0!==this.props.books.currently_reading.length?n.a.createElement("div",{className:"bookshelf"},n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},this.props.books.currently_reading.map(function(t,a){return n.a.createElement("li",{key:a},n.a.createElement("div",{className:"book"},n.a.createElement("div",{className:"book-top"},n.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url("+e.props.get_thumbnail(t)+")"}}),n.a.createElement("div",{className:"book-shelf-changer"},n.a.createElement("select",{onChange:function(o){return e.props.move_to(o,t,a)},value:"currentlyReading"},n.a.createElement("option",{value:"move",disabled:!0},"Move to..."),n.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),n.a.createElement("option",{value:"wantToRead"},"Want to Read"),n.a.createElement("option",{value:"read"},"Read"),n.a.createElement("option",{value:"none"},"None")))),n.a.createElement("div",{className:"book-title"},t.title),n.a.createElement("div",{className:"book-authors"},t.authors)))})))):n.a.createElement("h3",null,"No Books")))),n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},"Want to Read"),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},0!==this.props.books.want_to_read.length?n.a.createElement("div",{className:"bookshelf"},n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},this.props.books.want_to_read.map(function(t,a){return n.a.createElement("li",{key:a},n.a.createElement("div",{className:"book"},n.a.createElement("div",{className:"book-top"},n.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url("+e.props.get_thumbnail(t)+")"}}),n.a.createElement("div",{className:"book-shelf-changer"},n.a.createElement("select",{onChange:function(o){return e.props.move_to(o,t,a)},value:"wantToRead"},n.a.createElement("option",{value:"move",disabled:!0},"Move to..."),n.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),n.a.createElement("option",{value:"wantToRead"},"Want to Read"),n.a.createElement("option",{value:"read"},"Read"),n.a.createElement("option",{value:"none"},"None")))),n.a.createElement("div",{className:"book-title"},t.title),n.a.createElement("div",{className:"book-authors"},t.authors)))})))):n.a.createElement("h3",null,"No Books")))),n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},"Read"),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},0!==this.props.books.read.length?n.a.createElement("div",{className:"bookshelf"},n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},this.props.books.read.map(function(t,a){return n.a.createElement("li",{key:a},n.a.createElement("div",{className:"book"},n.a.createElement("div",{className:"book-top"},n.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url("+e.props.get_thumbnail(t)+")"}}),n.a.createElement("div",{className:"book-shelf-changer"},n.a.createElement("select",{onChange:function(o){return e.props.move_to(o,t,a)},value:"read"},n.a.createElement("option",{value:"move",disabled:!0},"Move to..."),n.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),n.a.createElement("option",{value:"wantToRead"},"Want to Read"),n.a.createElement("option",{value:"read"},"Read"),n.a.createElement("option",{value:"none"},"None")))),n.a.createElement("div",{className:"book-title"},t.title),n.a.createElement("div",{className:"book-authors"},t.authors)))})))):n.a.createElement("h3",null,"No Books")))))),n.a.createElement("div",{className:"open-search"},n.a.createElement(u.b,{to:"/search"},n.a.createElement("button",{style:{textDecoration:"none",border:"none"}},"Add a book")))))}}]),t}(o.Component),v=a(15),b="https://reactnd-books-api.udacity.com",w=localStorage.token;w||(w=localStorage.token=Math.random().toString(36).substr(-8));var p={Accept:"application/json",Authorization:w},E=function(e){return fetch("".concat(b,"/search"),{method:"POST",headers:Object(v.a)({},p,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),l=0;l<o;l++)n[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={query:"",results:[],searching:!1,not_found:!1},a.search=function(e){""!==e.target.value?(a.setState({searching:!0,not_found:!1,query:e.target.value}),E(e.target.value).then(function(e){void 0===e||e.error?a.setState({results:[],not_found:""!==a.state.query,searching:!1}):a.setState({results:null!==e?e:[],not_found:!1,searching:!1})})):a.setState({results:[],not_found:!1,searching:!1,query:e.target.value})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"search-books"},n.a.createElement("div",{className:"search-books-bar"},n.a.createElement(u.b,{to:"/"},n.a.createElement("button",{className:"close-search",style:{textDecoration:"none",border:"none"}},"Close")),n.a.createElement("div",{className:"search-books-input-wrapper"},n.a.createElement("input",{type:"text",placeholder:"Search by title or author",onChange:function(t){return e.search(t)}}))),n.a.createElement("div",{className:"search-books-results"},n.a.createElement("ol",{className:"books-grid"},0!==this.state.results.length&&""!==this.state.query?n.a.createElement("div",{className:"bookshelf"},n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},this.state.results.map(function(t,a){return n.a.createElement("li",{key:a},n.a.createElement("div",{className:"book"},n.a.createElement("div",{className:"book-top"},n.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url("+e.props.get_thumbnail(t)+")"}}),n.a.createElement("div",{className:"book-shelf-changer"},n.a.createElement("select",{onChange:function(o){return e.props.move_to(o,t,a)},value:"move"},n.a.createElement("option",{value:"move",disabled:!0},"Move to..."),n.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),n.a.createElement("option",{value:"wantToRead"},"Want to Read"),n.a.createElement("option",{value:"read"},"Read")))),n.a.createElement("div",{className:"book-title"},t.title),n.a.createElement("div",{className:"book-authors"},t.authors)))})))):this.state.searching?n.a.createElement("h3",null,"Searching..."):""===this.state.query?n.a.createElement("h3",null,"Search Books"):this.state.not_found?n.a.createElement("h3",null,"No Result"):n.a.createElement("h3",null,"Search Books"))))}}]),t}(o.Component),k=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(d.a)(t).call(this))).move_to=function(t,a,o){if("currentlyReading"===t.target.value){if(null===window.localStorage.getItem("currently_reading")){var n=[a];window.localStorage.setItem("currently_reading",JSON.stringify(n)),alert('Book Added to "Currently Reading" Successfully.')}else{var l=JSON.parse(window.localStorage.getItem("currently_reading")),r=!1;l.forEach(function(e){e.title===a.title&&(r=!0)}),r?alert('Book is Already Added to "Currently Reading".'):(l.push(a),window.localStorage.setItem("currently_reading",JSON.stringify(l)),alert('Book Added to "Currently Reading" Successfully.'))}var s=JSON.parse(window.localStorage.getItem("want_to_read")),c=JSON.parse(window.localStorage.getItem("read"));null!==s&&s.forEach(function(e,t){e.id===a.id&&(s.splice(t,1),window.localStorage.setItem("want_to_read",JSON.stringify(s)))}),null!==c&&c.forEach(function(e,t){e.id===a.id&&(c.splice(t,1),window.localStorage.setItem("read",JSON.stringify(c)))})}else if("wantToRead"===t.target.value){if(null===window.localStorage.getItem("want_to_read")){var i=[a];window.localStorage.setItem("want_to_read",JSON.stringify(i)),alert('Book Added to "Want to Read" Successfully.')}else{var d=JSON.parse(window.localStorage.getItem("want_to_read")),m=!1;d.forEach(function(e){e.title===a.title&&(m=!0)}),m?alert('Book is Already Added to "Want to Read".'):(d.push(a),window.localStorage.setItem("want_to_read",JSON.stringify(d)),alert('Book Added to "Want to Read" Successfully.'))}var u=JSON.parse(window.localStorage.getItem("currently_reading")),g=JSON.parse(window.localStorage.getItem("read"));null!==u&&u.forEach(function(e,t){e.id===a.id&&(u.splice(t,1),window.localStorage.setItem("currently_reading",JSON.stringify(u)))}),null!==g&&g.forEach(function(e,t){e.id===a.id&&(g.splice(t,1),window.localStorage.setItem("read",JSON.stringify(g)))})}else if("read"===t.target.value){if(null===window.localStorage.getItem("read")){var h=[a];window.localStorage.setItem("read",JSON.stringify(h)),alert('Book Added to "Read" Successfully.')}else{var v=JSON.parse(window.localStorage.getItem("read")),b=!1;v.forEach(function(e){e.title===a.title&&(b=!0)}),b?alert('Book is Already Added to "Read".'):(v.push(a),window.localStorage.setItem("read",JSON.stringify(v)),alert('Book Added to "Read" Successfully.'))}var w=JSON.parse(window.localStorage.getItem("want_to_read")),p=JSON.parse(window.localStorage.getItem("currently_reading"));null!==w&&w.forEach(function(e,t){e.id===a.id&&(w.splice(t,1),window.localStorage.setItem("want_to_read",JSON.stringify(w)))}),null!==p&&p.forEach(function(e,t){e.id===a.id&&(p.splice(t,1),window.localStorage.setItem("currently_reading",JSON.stringify(p)))})}else if("none"===t.target.value){var E=JSON.parse(window.localStorage.getItem("read")),f=JSON.parse(window.localStorage.getItem("want_to_read")),k=JSON.parse(window.localStorage.getItem("currently_reading"));null!==f&&f.forEach(function(e,t){e.id===a.id&&(f.splice(t,1),window.localStorage.setItem("want_to_read",JSON.stringify(f)))}),null!==k&&k.forEach(function(e,t){e.id===a.id&&(k.splice(t,1),window.localStorage.setItem("currently_reading",JSON.stringify(k)))}),null!==E&&E.forEach(function(e,t){e.id===a.id&&(E.splice(t,1),window.localStorage.setItem("read",JSON.stringify(E)))}),alert("Book has been removed Successfully.")}e.setState({currently_reading:null!==window.localStorage.getItem("currently_reading")?JSON.parse(window.localStorage.getItem("currently_reading")):[],want_to_read:null!==window.localStorage.getItem("want_to_read")?JSON.parse(window.localStorage.getItem("want_to_read")):[],read:null!==window.localStorage.getItem("read")?JSON.parse(window.localStorage.getItem("read")):[]})},e.get_thumbnail=function(e){return e.imageLinks?e.imageLinks.thumbnail:""},e.state={currently_reading:null!==window.localStorage.getItem("currently_reading")?JSON.parse(window.localStorage.getItem("currently_reading")):[],want_to_read:null!==window.localStorage.getItem("want_to_read")?JSON.parse(window.localStorage.getItem("want_to_read")):[],read:null!==window.localStorage.getItem("read")?JSON.parse(window.localStorage.getItem("read")):[]},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement(u.a,null,n.a.createElement(g.a,{exact:!0,path:"/",render:function(){return n.a.createElement(h,{books:e.state,move_to:e.move_to,get_thumbnail:e.get_thumbnail})}}),n.a.createElement(g.a,{path:"/search",render:function(){return n.a.createElement(f,{books:e.state,move_to:e.move_to,get_thumbnail:e.get_thumbnail})}})))}}]),t}(n.a.Component);a(32);r.a.render(n.a.createElement(k,null),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.ac2b6eb4.chunk.js.map