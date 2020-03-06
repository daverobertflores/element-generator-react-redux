import ReactDOM from "react-dom";
import React from "react";
import $ from "jquery";
import './App.css';
const CircularJSON = require('circular-json');


class App extends React.Component {

      //todo remove pseudo class X (still work todo) $("*").addClass("without-after-element"); // $("*").removeClass("without-after-element");
      //todo adjust pseudo class border size to resize dynamic
      //todo limit clickable area on div drag task 
      //todo resize other objects
      //todo edit every object
      // bind copy cut paste undo redo hotkeys

  
  


  componentDidUpdate() {
    var self = this;
    var $box = $('.box');
    var $button = $('.button');
    var $image = $('.image');
    var $video = $('.video');
    var menu = document.querySelectorAll(".menu");



    
  

    if (this.state.publish) {
      $("*").removeClass("without-after-element");
    } else if (!this.state.publish) {
    $(document).ready(function(e) {
      $box.on('mousedown', function (evt) {
        $box.on('mouseup mousemove', function handler(evt) {
          if (evt.type === 'mouseup') {
            const id = $(this).attr('specId');
            // click
            $(this)
            .addClass("selected")
            .siblings()
            .removeClass("selected");

            // if (document.addEventListener) {
            //   document.addEventListener('contextmenu', function(e) {
            //     menu[0].style.display = 'block';
            //     menu[0].style.marginLeft = e.pageX + 'px';  // NEED TO REFACTOR TO OBJECT POSITION
            //     menu[0].style.marginTop = e.pageY + 'px'; // NEED TO REFACTOR TO OBJECT POSITION
            //     e.preventDefault();
            //   }, false);
            // } else {
            //   document.attachEvent('oncontextmenu', function(e) {
            //     menu[0].style.display = 'block';
            //     menu[0].style.marginLeft = e.pageX + 'px'; // NEED TO REFACTOR TO OBJECT POSITION
            //     menu[0].style.marginTop = e.pageY + 'px'; // NEED TO REFACTOR TO OBJECT POSITION //this can be event.currentTarget or same as dragTask function
            //     window.event.returnValue = false;
            //   });
            // }
        
            // var li = document.getElementsByTagName("li");
            
            // var defaultEventListeners = [
            //   {
            //     key: "Apagar",
            //     func: (id) => { self._deleteObject(id) }
            //   },
            //   {
            //     key: "Copiar",
            //     func: self._copyObject($(this).attr("id"))
            //   },
            //   {
            //     key: "Recortar",
            //     func: self._cutObject($(this).attr("id"))
            //   },
            //   {
            //     key: "Colar",
            //     funct: self._pasteObject($(this).attr("id"))
            //   },
            //   {
            //     key: "Ordenar",
            //   },
            //   {
            //     key: "Editar",
            //   },
            //   {
            //     key: "Guardar Objeto",
            //   },
            //   {
            //     key: "Inserir Objeto",
            //   },
            //   {
            //     key: "Desfazer",
            //   },
            //   {
            //     key: "Refazer",
            //   }
            // ]
            
            var func = () => {
              var menu = document.getElementsByClassName('box')[id].firstChild;

                function showMenu(x, y){
                    hideMenu()
                    // menu.setAttribute('id', id)
                    menu.style.left = x + 'px';
                    menu.style.top = y + 'px';
                    menu.classList.add('show-menu');
                }

                function hideMenu(){
                  Array.from(document.getElementsByClassName('box')).map(item => {
                    item.firstChild.classList.remove('show-menu')
                  })
                }

                function onContextMenu(e){
                    e.preventDefault();
                    showMenu(e.pageX, e.pageY);
                    document.addEventListener('click', onClick, false);
                }

                function onClick(e){
                    hideMenu();
                    document.removeEventListener('click', onClick);
                }

                document.addEventListener('contextmenu', onContextMenu, false);
            }
            func();
            // Still need to update copied object id
            // for(var i = 0;i<li.length;i++){
            //     li[i].addEventListener(defaultEventListeners[2].key, () => defaultEventListeners[2].func);
            //     li[i].addEventListener(defaultEventListeners[3].key, () => defaultEventListeners[3].func);
            // }
            

            


          $("<div/>", { class: "resizer top" }).appendTo(".resizers");
          $("<div/>", { class: "resizer left" }).appendTo(".resizers");
          $("<div/>", { class: "resizer right" }).appendTo(".resizers");
          $("<div/>", { class: "resizer bottom" }).appendTo(".resizers");
          $("<div/>", { class: "resizer top-left" }).appendTo(".resizers");
          $("<div/>", { class: "resizer top-right" }).appendTo(".resizers");
          $("<div/>", { class: "resizer bottom-left" }).appendTo(".resizers");
          $("<div/>", { class: "resizer bottom-right" }).appendTo(".resizers");
          $("<div/>", { class: "resizer top" }).appendTo(".resizers");
          $("<div/>", { class: "resizer left" }).appendTo(".resizers");
          $("<div/>", { class: "resizer right" }).appendTo(".resizers");
          $("<div/>", { class: "resizer bottom" }).appendTo(".resizers");
          $("<div/>", { class: "resizer top-left" }).appendTo(".resizers");
          $("<div/>", { class: "resizer top-right" }).appendTo(".resizers");
          $("<div/>", { class: "resizer bottom-left" }).appendTo(".resizers");
          $("<div/>", { class: "resizer bottom-right" }).appendTo(".resizers");
          //if(self.state.ObjectMap[$(this).attr("id")] && self.state.TreeMap[$(this).attr("id").toString() + "TreeMap"]) {
            self.makeResizableDiv(".resizers", $(this).attr("id"));
          //}
        } else {
          // drag
          //$(this).draggable();
          $("*").addClass("without-after-element");
          $(this)
            .bind('dragstop',   function(event){ self._dragTask(event, $(this).height(), $(this).width(), $(this).attr('id')); });
                }
                $box.off('mouseup mousemove', handler);
              })
            });

        $(document).ready(function(e) {
          $button.on('mousedown', function (evt) {
            $button.on('mouseup mousemove', function handler(evt) {
              if (evt.type === 'mouseup') {
                // click
                $(this)
                .addClass("selected")
                .siblings()
                .removeClass("selected");
              $("<div/>", { class: "resizer top" }).appendTo(".resizers");
              $("<div/>", { class: "resizer left" }).appendTo(".resizers");
              $("<div/>", { class: "resizer right" }).appendTo(".resizers");
              $("<div/>", { class: "resizer bottom" }).appendTo(".resizers");
              $("<div/>", { class: "resizer top-left" }).appendTo(".resizers");
              $("<div/>", { class: "resizer top-right" }).appendTo(".resizers");
              $("<div/>", { class: "resizer bottom-left" }).appendTo(".resizers");
              $("<div/>", { class: "resizer bottom-right" }).appendTo(".resizers");
              $("<div/>", { class: "resizer top" }).appendTo(".resizers");
              $("<div/>", { class: "resizer left" }).appendTo(".resizers");
              $("<div/>", { class: "resizer right" }).appendTo(".resizers");
              $("<div/>", { class: "resizer bottom" }).appendTo(".resizers");
              $("<div/>", { class: "resizer top-left" }).appendTo(".resizers");
              $("<div/>", { class: "resizer top-right" }).appendTo(".resizers");
              $("<div/>", { class: "resizer bottom-left" }).appendTo(".resizers");
              $("<div/>", { class: "resizer bottom-right" }).appendTo(".resizers");
              self.makeResizableDiv(".resizers", $(this).attr("id"));
            } else {
              // drag
              //$(this).draggable();
              $("*").addClass("without-after-element");
              $(this)
                .bind('dragstop',   function(event){ self._dragTask(event, $(this).height(), $(this).width(), $(this).attr('id')); });
                    }
                    $button.off('mouseup mousemove', handler);
                  })
                });

        
    



              $(document).ready(function(e) {
                $image.on('mousedown', function (evt) {
                  $image.on('mouseup mousemove', function handler(evt) {
                    if (evt.type === 'mouseup') {
                      // click
                      $(this)
                      .addClass("selected")
                      .siblings()
                      .removeClass("selected");
                    $("<div/>", { class: "resizer top" }).appendTo(".resizers");
                    $("<div/>", { class: "resizer left" }).appendTo(".resizers");
                    $("<div/>", { class: "resizer right" }).appendTo(".resizers");
                    $("<div/>", { class: "resizer bottom" }).appendTo(".resizers");
                    $("<div/>", { class: "resizer top-left" }).appendTo(".resizers");
                    $("<div/>", { class: "resizer top-right" }).appendTo(".resizers");
                    $("<div/>", { class: "resizer bottom-left" }).appendTo(".resizers");
                    $("<div/>", { class: "resizer bottom-right" }).appendTo(".resizers");
                    $("<div/>", { class: "resizer top" }).appendTo(".resizers");
                    $("<div/>", { class: "resizer left" }).appendTo(".resizers");
                    $("<div/>", { class: "resizer right" }).appendTo(".resizers");
                    $("<div/>", { class: "resizer bottom" }).appendTo(".resizers");
                    $("<div/>", { class: "resizer top-left" }).appendTo(".resizers");
                    $("<div/>", { class: "resizer top-right" }).appendTo(".resizers");
                    $("<div/>", { class: "resizer bottom-left" }).appendTo(".resizers");
                    $("<div/>", { class: "resizer bottom-right" }).appendTo(".resizers");
                    self.makeResizableDiv(".resizers", $(this).attr("id"));
                  } else {
                    // drag
                    //$(this).draggable();
                    $("*").addClass("without-after-element");
                    $(this)
                      .bind('dragstop',   function(event){ self._dragTask(event, $(this).height(), $(this).width(), $(this).attr('id')); });
                          }
                          $image.off('mouseup mousemove', handler);
                        })
                      });
                    })
                  })
                })
                $(document).ready(function(e) {
                  $video.on('mousedown', function (evt) {
                    $video.on('mouseup mousemove', function handler(evt) {
                      if (evt.type === 'mouseup') {
                        // click
                        $(this)
                        .addClass("selected")
                        .siblings()
                        .removeClass("selected");
                      $("<div/>", { class: "resizer top" }).appendTo(".resizers");
                      $("<div/>", { class: "resizer left" }).appendTo(".resizers");
                      $("<div/>", { class: "resizer right" }).appendTo(".resizers");
                      $("<div/>", { class: "resizer bottom" }).appendTo(".resizers");
                      $("<div/>", { class: "resizer top-left" }).appendTo(".resizers");
                      $("<div/>", { class: "resizer top-right" }).appendTo(".resizers");
                      $("<div/>", { class: "resizer bottom-left" }).appendTo(".resizers");
                      $("<div/>", { class: "resizer bottom-right" }).appendTo(".resizers");
                      $("<div/>", { class: "resizer top" }).appendTo(".resizers");
                      $("<div/>", { class: "resizer left" }).appendTo(".resizers");
                      $("<div/>", { class: "resizer right" }).appendTo(".resizers");
                      $("<div/>", { class: "resizer bottom" }).appendTo(".resizers");
                      $("<div/>", { class: "resizer top-left" }).appendTo(".resizers");
                      $("<div/>", { class: "resizer top-right" }).appendTo(".resizers");
                      $("<div/>", { class: "resizer bottom-left" }).appendTo(".resizers");
                      $("<div/>", { class: "resizer bottom-right" }).appendTo(".resizers");
                      self.makeResizableDiv(".resizers", $(this).attr("id"));
                    } else {
                      // drag
                      //$(this).draggable();
                      $("*").addClass("without-after-element");
                      $(this)
                        .bind('dragstop',   function(event){ self._dragTask(event, $(this).height(), $(this).width(), $(this).attr('id')); });
                            }
                            $video.off('mouseup mousemove', handler);
                          })
                        });
                      }
                )}
                    }

            

                      
            
 // close brackets

            
                       

            
  constructor(props) {
    super(props);
    this.state = {
      MainContainer: {
        backgroundColor: "#282c34",
        position: "relative",
        display: "flex",
        minHeight: "100vh"
      },
      ObjectMap: [],
      ObjectTree: [],
      TreeMap: [],
      IdCounter: 0,
      IdCounterBox: 0,
      publish: false,
      copyHolder: null,
    };
  }

  // MENU OPTIONS

  _deleteObject = (objectId) => {
    var TreeMap = this.state.TreeMap;
    var ObjectMap = this.state.ObjectMap;
    delete TreeMap[objectId.toString() + "TreeMap"];
    delete ObjectMap[objectId];
    this.setState({
      TreeMap: TreeMap,
      ObjectMap: ObjectMap
    })
  }

  _copyObject = (objectId) => {
    var json = {
      ObjectMapCopy: this.state.ObjectMap[objectId],
      TreeMapCopy: this.state.ObjectMap[objectId.toString() + "TreeMap"]
    }
    this.setState({copyHolder: json});
  }

  _cutObject = (objectId) => {
    this._copyObject(objectId);
    this._deleteObject(objectId);
  }

  _pasteObject = (event) => {
    var TreeMap = this.state.TreeMap;
    var ObjectMap = this.state.ObjectMap;
    TreeMap.push(this.state.TreeMapCopy);
    ObjectMap.push(this.state.ObjectMapCopy)
    this.setState({
      ObjectMap: ObjectMap,
      TreeMap: TreeMap
    });
  }


  // END MENU OPTIONS


  _createObject = object => {
    var ObjectMap = this.state.ObjectMap;
    ObjectMap.push(object);
    this.setState({ ObjectMap: ObjectMap }/**, () => this._initDragElement()**/);
  }

  openAlert = id => {
    alert(id)
  }

  // _initDragElement = () => {
  //   var pos1 = 0,
  //     pos2 = 0,
  //     pos3 = 0,
  //     pos4 = 0;
  //   var popups = document.getElementsByClassName("popup");
  //   var elmnt = null;
  //   var currentZIndex = 100; //TODO reset z index when a threshold is passed
  
  //   for (var i = 0; i < popups.length; i++) {
  //     var popup = popups[i];
  //     var header = this._getHeader(popup);
  
  //     popup.onmousedown = function() {
  //       this.style.zIndex = "" + ++currentZIndex;
  //     };
  
  //     if (header) {
  //       header.parentPopup = popup;
  //       header.onmousedown = this._dragMouseDown;
  //     }
  //   }
  // }
  
  // _dragMouseDown = (e) => {
  //     elmnt = this.parentPopup;
  //     elmnt.style.zIndex = "" + ++currentZIndex;
  
  //     e = e || window.event;
  //     // get the mouse cursor position at startup:
  //     pos3 = e.clientX;
  //     pos4 = e.clientY;
  //     document.onmouseup = this._closeDragElement;
  //     // call a function whenever the cursor moves:
  //     document.onmousemove = this._elementDrag;
    
  // }
  
  //   _elementDrag = (e) => {
  //     if (!elmnt) {
  //       return;
  //     }
  
  //     e = e || window.event;
  //     // calculate the new cursor position:
  //     pos1 = pos3 - e.clientX;
  //     pos2 = pos4 - e.clientY;
  //     pos3 = e.clientX;
  //     pos4 = e.clientY;
  //     // set the element's new position:
  //     elmnt.style.top = elmnt.offsetTop - pos2 + "px";
  //     elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  //   }
  
  //   _closeDragElement = () => {
  //     /* stop moving when mouse button is released:*/
  //     document.onmouseup = null;
  //     document.onmousemove = null;
  //   }
  
  //   _getHeader = (element) => {
  //     var headerItems = element.getElementsByClassName("popup-header");
  
  //     if (headerItems.length === 1) {
  //       return headerItems[0];
  //     }
  
  //     return null;
  //   }
  
  //  _initDrag = (e) => {
  //     element = this.parentPopup;
  
  //     startX = e.clientX;
  //     startY = e.clientY;
  //     startWidth = parseInt(
  //       document.defaultView.getComputedStyle(element).width,
  //       10
  //     );
  //     startHeight = parseInt(
  //       document.defaultView.getComputedStyle(element).height,
  //       10
  //     );
  //     document.documentElement.addEventListener("mousemove", this._doDrag, false);
  //     document.documentElement.addEventListener("mouseup", this._stopDrag, false);
  //   }
  
  //   _doDrag = (e) => {
  //     element.style.width = startWidth + e.clientX - startX + "px";
  //     element.style.height = startHeight + e.clientY - startY + "px";
  //   }
  
  //   _stopDrag = () => {
  //     document.documentElement.removeEventListener("mousemove", this._doDrag, false);
  //     document.documentElement.removeEventListener("mouseup", this._stopDrag, false);
  //   }

  _addToObjectTree = (id, type, style, position, url, params, css) => {
    var ObjectTree = this.state.ObjectTree;
    ObjectTree.push({
      id: id,
      type: type,
      style: style,
      position: position,
      url: url,
      params: params,
      css: css
    });
    this.setState({ObjectTree: ObjectTree});
  }

  _createBox = (css, id, specId, zindex, style) => {
    var object = {
      position: "absolute",
      top: this.state.positionX,
      left: this.state.positionY,
      zIndex: zindex,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };
    var styleObject = Object.assign({}, object, style);
    this._addToObjectTree(
      id,
      "Box",
      styleObject,
      {
        y: 0,
        x: 0
      },
      null,
      null,
      css
    )
    return (
      <div
        id={id}
        specId={specId}
        style={styleObject}
        className={css}
        draggable="true"
        onDragEnd={event => {
          this._dragTask(event, style.height, style.width, id);
        }}
      >
        <div class="menu">
          <li class="menu-item">
            <button type="button" id={id} class="menu-btn" onClick={() => this.openAlert(specId)}> <i class="fa fa-folder-open"></i> <span class="menu-text">Open</span> </button>
          </li>
          <li class="menu-item disabled">
            <button type="button" class="menu-btn"> <span class="menu-text">Open in New Window</span> </button>
          </li>
          <li class="menu-separator"></li>
          <li class="menu-item">
            <button type="button" class="menu-btn"> <i class="fa fa-reply"></i> <span class="menu-text">Reply</span> </button>
          </li>
          <li class="menu-item">
            <button type="button" class="menu-btn"> <i class="fa fa-star"></i> <span class="menu-text">Favorite</span> </button>
          </li>
          <li class="menu-item submenu">
            <button type="button" class="menu-btn"> <i class="fa fa-users"></i> <span class="menu-text">Social</span> </button>
            <menu class="menu">
              <li class="menu-item">
                <button type="button" class="menu-btn"> <i class="fa fa-comment"></i> <span class="menu-text">Comment</span> </button>
              </li>
              <li class="menu-item submenu">
                <button type="button" class="menu-btn"> <i class="fa fa-share"></i> <span class="menu-text">Share</span> </button>
                <menu class="menu">
                  <li class="menu-item">
                    <button type="button" class="menu-btn"> <i class="fa fa-twitter"></i> <span class="menu-text">Twitter</span> </button>
                  </li>
                  <li class="menu-item">
                    <button type="button" class="menu-btn"> <i class="fa fa-facebook-official"></i> <span class="menu-text">Facebook</span> </button>
                  </li>
                  <li class="menu-item">
                    <button type="button" class="menu-btn"> <i class="fa fa-google-plus"></i> <span class="menu-text">Google Plus</span> </button>
                  </li>
                  <li class="menu-item">
                    <button type="button" class="menu-btn"> <i class="fa fa-envelope"></i> <span class="menu-text">Email</span> </button>
                  </li>
                </menu>
              </li>
            </menu>
          </li>
          <li class="menu-separator"></li>
          <li class="menu-item">
            <button type="button" class="menu-btn"> <i class="fa fa-download"></i> <span class="menu-text">Save</span> </button>
          </li>
          <li class="menu-item">
            <button type="button" class="menu-btn"> <i class="fa fa-edit"></i> <span class="menu-text">Rename</span> </button>
          </li>
          <li class="menu-item">
            <button type="button" class="menu-btn"> <i class="fa fa-trash"></i> <span class="menu-text">Delete</span> </button>
          </li>
        </div>
      <div className="resizers"></div>
      </div>
    )
  };

  // RESIZE STILL DO NOT AFFECT IMAGE ON PUBLISH !!!
  // var width = document.getElementById(prop.id).offsetWidth;
  // var height = document.getElementById(prop.id).offsetHeight;

  _createButton = (style, id, css) => {
    var object = {
      position: "absolute",
      top: this.state.positionX,
      left: this.state.positionY,
      // The lines bellow align text in the middle of button
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
    var styleObject = Object.assign({}, object, style);
    this._addToObjectTree(
      id,
      "Button",
      styleObject,
      {
        y: 0,
        x: 0
      },
      null,
      null
    )
    return (
      <div
        id={id}
        style={styleObject}
        draggable="true"
        className={css}
        onDragEnd={event => {
          this._dragTask(event, style.height, style.width, id);
        }}
      >
        <div className="resizers"></div>
        <p>ENTER TEXT HERE</p>
      </div>
    )
  }

  _createImage = (style, id, height, width, css) => {
    var object = {
      position: "absolute",
      top: this.state.positionX,
      left: this.state.positionY,
      margin: 0,
      padding: 0,
    };
    var styleObject = Object.assign({}, object, style);
    this._addToObjectTree(
      id,
      "Image",
      styleObject,
      {
        y: 0,
        x: 0
      },
      null,
      null
    )
    return (
      <div
        id={id}
        style={styleObject}
        draggable="true"
        className={css}
        onDragEnd={event => {
          this._dragTask(event, height, width, id);
        }}
      >
        <div className="resizers">
        </div>
      </div>
    )
  }

  _createVideo = (id, height, width, videoURL, css) => {
    var object = {
      position: "absolute",
      top: this.state.positionX,
      left: this.state.positionY
    };
    var styleObject = Object.assign({}, object);
    this._addToObjectTree(
      id,
      "Video",
      styleObject,
      {
        y: 0,
        x: 0
      },
      videoURL,
      {
        width: width,
        height: height
      }
    )
    var format = this._getVideoFormat(videoURL);
    return (
      <div
      id={id}
      style={styleObject}
      draggable="true"
      className={css}
      onDragEnd={event => {
        this._dragTask(event, height, width, id);
      }}>
        <div className="resizers"></div>
        <video width={width} height={height} preload="auto">
          <source src={videoURL} type={format}/>
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }

  _getVideoFormat = (videoURL) => {
    return "video/" + videoURL.split('.').pop();
  }

  _buttonPublish = () => {
    // Resize elements from up and left corners reposition elements in a wrong way
    var TreeMap = this.state.TreeMap;
    this.state.ObjectTree.forEach(item => {
      TreeMap[item.id] = this._parseItemToTreeMap(item);
      this.setState({
        TreeMap: TreeMap,
        publish: true
      }, () => {
        document.getElementById(item.id.toString()+"TreeMap").style.left = item.position.x;
        document.getElementById(item.id.toString()+"TreeMap").style.top = item.position.y;
      });
    });
  }

  _buttonUnpublish = () => {
    var buttonArray = [];
    this.state.ObjectTree.forEach(item => {
      switch(item.type) {
        case "Button":
          buttonArray.push({
            width: document.getElementById(item.id.toString() + "TreeMap").offsetWidth.toString() + "px",
            height: document.getElementById(item.id.toString() + "TreeMap").offsetHeight.toString() + "px"
          })
          // document.getElementById(item.id).style.width = document.getElementById(item.id.toString() + "TreeMap").offsetWidth;
          // document.getElementById(item.id).style.height = document.getElementById(item.id.toString() + "TreeMap").offsetHeight;
        default:
      }
    })
    this.setState({publish: !this.state.publish}, () => {
      this.state.ObjectMap.forEach(item => {
        document.getElementById(item.props.id).style.left = this.state.ObjectTree[item.props.id].position.x;
        document.getElementById(item.props.id).style.top = this.state.ObjectTree[item.props.id].position.y;
      });
      var buttonCounter = 0;
      this.state.ObjectTree.forEach(item => {
        switch(item.type) {
          case "Button":
            document.getElementById(item.id).style.width = buttonArray[buttonCounter].width;
            document.getElementById(item.id).style.height = buttonArray[buttonCounter].height;
            buttonCounter++;
          default:
        }
      });
    });
    // this.state.ObjectTree.map((item, index) => {
    //   switch(item.type) {
    //     case "Button":
    //       alert(this.state.TreeMap[item.id]
    //     default:
    //       return () => {}
    //   }
    // });
  }



  _parseItemToTreeMap = (prop) => {
    switch(prop.type) {
      case "Box":
        var propStyle = Object.assign({}, prop.style, { top: prop.position.y, left: prop.position.x });
        return (
          <div
            id={prop.id.toString()+"TreeMap"}
            style={propStyle}
            className={prop.css}
          />
        );
      case "Button":
        var width = document.getElementById(prop.id).offsetWidth;
        var height = document.getElementById(prop.id).offsetHeight;
        var propStyle = Object.assign({}, prop.style, { top: prop.position.y, left: prop.position.x }, {width: width, height: height});
        return (
          <a href="http://google.com" target="_blank">
            <div
              id={prop.id.toString()+"TreeMap"}
              style={propStyle}
            >
              <p>ENTER TEXT HERE</p>
            </div>
          </a>
        );
      case "Image":
        var propStyle = Object.assign({}, prop.style, { top: prop.position.y, left: prop.position.x });
        return (
          <div
            id={prop.id.toString()+"TreeMap"}
            style={propStyle}
          />
        );
      case "Video":
        var propStyle = Object.assign({}, prop.style, { top: prop.position.y, left: prop.position.x }); 
        var format = this._getVideoFormat(prop.url);
        return (
          <div
          id={prop.id.toString()+"TreeMap"}
          style={prop.style}
          >
            <video width={prop.params.width} height={prop.params.height} controls="controls" preload="auto">
              <source src={prop.url} type={format}/>
              Your browser does not support the video tag.
            </video>
          </div>
        );
      default:
        throw Error("Error on _parseItemToTreeMap of App.js! case default. No prop type found.")
    }
  }

  // 2 clickes editar
  //click nas bordas redimensionar
  // mover (done)
  //botao publicar
  //menu em cima (/baixo)

  _dragTask(event, height, width, id) {
    var objectHeight = typeof height === "string" ? height.replace('px', '') : height;
    var objectWidth = typeof width === "string" ? width.replace('px', '') : width;
    var y = (event.clientY - ((Number(objectHeight)/2))) + "px";
    var x = (event.clientX - ((Number(objectWidth)/2))) + "px";
    document.getElementById(id).style.left = x;
    document.getElementById(id).style.top = y;
    this._updateObjectPosition(id, y, x);
  }

  _updateObjectPosition = (id, yPos, xPos) => {
    var ObjectTree = this.state.ObjectTree;
    ObjectTree[id].position = {
      y: yPos,
      x: xPos
    };
    this.setState({ObjectTree: ObjectTree});
  }

  _buttonCreateBox = () => {
    this._createObject(
      this._createBox("mutable box resizable", this.state.IdCounter, this.state.IdCounterBox, 0, {
        width: 100,
        height: 100,
        backgroundColor: "white",
        id: this.state.IdCounter
       }, this.setState({ IdCounter: this.state.IdCounter + 1, IdCounterBox: this.state.IdCounterBox + 1 }))
    );
  };

  _buttonCreateButton = () => {
    this._createObject(
      this._createButton({
        backgroundColor: "red",
        width: "200px",
        height: "75px"
      }, this.state.IdCounter, "button", this.setState({IdCounter: this.state.IdCounter + 1}))
    );
  };

  _buttonCreateImage = (ImageURL) => { 
    var img = new Image();
    img.onload = (event) => {
        this._createObject(
          this._createImage({
            width: event.target.width,
            height: event.target.height,
            backgroundImage: `url(${ImageURL})`,
            backgroundRepeat: "no-repeat"
          }, this.state.IdCounter, event.target.height, event.target.width, "image", this.setState({IdCounter: this.state.IdCounter + 1}))
        )
    }
    img.src = ImageURL;
  }

  _buttonCreateVideo = () => {
    this._createObject(
      this._createVideo(this.state.IdCounter, "250", "400", "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4", "video", this.setState({IdCounter: this.state.IdCounter + 1}))
    )
  }


  
  makeResizableDiv = (div, id) => {
    const element = document.getElementById(id);
    const resizers = element.querySelectorAll( div + " .resizer" );
    const minimum_size = 20;
    let original_width = 0;
    let original_height = 0;
    let original_x = 0;
    let original_y = 0;
    let original_mouse_x = 0;
    let original_mouse_y = 0;
    for (let i = 0; i < resizers.length; i++) {
      const currentResizer = resizers[i];
      currentResizer.addEventListener("mousedown", function(e) {
        e.preventDefault();
        original_width = parseFloat(
          getComputedStyle(element, null)
            .getPropertyValue("width")
            .replace("px", "")
        );
        original_height = parseFloat(
          getComputedStyle(element, null)
            .getPropertyValue("height")
            .replace("px", "")
        );
        original_x = element.getBoundingClientRect().left;
        original_y = element.getBoundingClientRect().top;
        original_mouse_x = e.pageX;
        original_mouse_y = e.pageY;
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResize);
      });
      

      //NEED TO RESIZE IMAGE FROM CORNERS
      // Resize video need fiz (especially from corners)
      function resize(e) {
        var px = "px";
        if (currentResizer.classList.contains("right")) {
          var width = original_width + (e.pageX - original_mouse_x);
          if (width > minimum_size) {
            element.style.width = width + px;
            if(element.style.backgroundImage) {
              element.style.backgroundSize = width + "px " + original_height + px;
            }
            if(element.getElementsByTagName("video")[0]) {
              var e = element.getElementsByTagName("video")[0];
              e.setAttribute("width", width + px);
              e.setAttribute("height", original_height + px);
            }
          }
        } else if (currentResizer.classList.contains("left")) {
          const width = original_width - (e.pageX - original_mouse_x);
          if (width > minimum_size) {
            element.style.width = width + px;
            element.style.left =
              original_x + (e.pageX - original_mouse_x) + px;
            if(element.style.backgroundImage) {
              element.style.backgroundSize = width + "px " + original_height + px;
            }
            if(element.getElementsByTagName("video")[0]) {
              var e = element.getElementsByTagName("video")[0];

              e.setAttribute("width", width + px);
              e.setAttribute("height", original_height + px);
            }
          }
        } else if (currentResizer.classList.contains("top")) {
          const height = original_height - (e.pageY - original_mouse_y);
          if (height > minimum_size) {
            element.style.height = height + px;
            element.style.top =
              original_y + (e.pageY - original_mouse_y) + px;
            if(element.style.backgroundImage) {
              element.style.backgroundSize = original_width + "px " + height + px;
            }
            if(element.getElementsByTagName("video")[0]) {
              var e = element.getElementsByTagName("video")[0];

              e.setAttribute("width", original_width + px);
              e.setAttribute("height", height + px);
            }
          }
        } else if (currentResizer.classList.contains("bottom")) {
          const height = original_height + (e.pageY - original_mouse_y);
          if (height > minimum_size) {
            element.style.height = height + px;
            if(element.style.backgroundImage) {
              element.style.backgroundSize = original_width + "px " + height + px;
            }
            if(element.getElementsByTagName("video")[0]) {
              var e = element.getElementsByTagName("video")[0];

              e.setAttribute("width", original_width + px);
              e.setAttribute("height", height + px);
            }
          }
        } else if (currentResizer.classList.contains("bottom-right")) {
          const width = original_width + (e.pageX - original_mouse_x);
          const height = original_height + (e.pageY - original_mouse_y);
          if (width > minimum_size) {
            element.style.width = width + px;
            if(element.style.backgroundImage) {
              element.style.backgroundSize =  width + "px " +  height + px;
            }
            if(element.getElementsByTagName("video")[0]) {
              var e = element.getElementsByTagName("video")[0];

              e.setAttribute("width", width  + px);
              if (height >= 20) e.setAttribute("height", height + px);
            }
          }
          if (height > minimum_size) {
            element.style.height = height + px;
            if(element.style.backgroundImage) {
              element.style.backgroundSize =  width + "px " + height + px;
            }
            if(element.getElementsByTagName("video")[0]) {
              var e = element.getElementsByTagName("video")[0];

              if(width >= 20) e.setAttribute("width", width + px);
              e.setAttribute("height", height + px);
            }
          }
        } else if (currentResizer.classList.contains("bottom-left")) {
          const height = original_height + (e.pageY - original_mouse_y);
          const width = original_width - (e.pageX - original_mouse_x);
          if (width > minimum_size) {
            element.style.width = width + px;
            element.style.left =
              original_x + (e.pageX - original_mouse_x) + px;
              if(element.style.backgroundImage) {
                element.style.backgroundSize =  width + "px " + height + px;
              }
              if(element.getElementsByTagName("video")[0]) {
                var e = element.getElementsByTagName("video")[0];
  
                e.setAttribute("width", width + px);
                if (height >= 20) e.setAttribute("height", height + px);
              }
          }
          if (height > minimum_size) {
            element.style.height = height + px;
            if(element.style.backgroundImage) {
              element.style.backgroundSize =  width + "px " + height + px;
            }
            if(element.getElementsByTagName("video")[0]) {
              var e = element.getElementsByTagName("video")[0];

              if (width >= 20) e.setAttribute("width", width + px);
              e.setAttribute("height", height + px);
            }
          }
        } else if (currentResizer.classList.contains("top-right")) {
          const width = original_width + (e.pageX - original_mouse_x);
          const height = original_height - (e.pageY - original_mouse_y);
          if (height > minimum_size) {
            element.style.height = height + px;
            element.style.top =
              original_y + (e.pageY - original_mouse_y) + px;
              if(element.style.backgroundImage) {
                if(width >= 20) element.style.backgroundSize =  width + "px " + height + px;
              }
              if(element.getElementsByTagName("video")[0]) {
                var e = element.getElementsByTagName("video")[0];
                if(width >= 20) e.setAttribute("width", width + px);
                e.setAttribute("height", height + px);
              }
          }
          if (width > minimum_size && height > minimum_size) {
            element.style.width = width + px;
            element.style.height = height + px;
            element.style.top =
              original_y + (e.pageY - original_mouse_y) + px;
            if(element.style.backgroundImage) {
              element.style.backgroundSize =  width + "px "  + height + px;
            }
            if(element.getElementsByTagName("video")[0]) {
              var e = element.getElementsByTagName("video")[0];
              if(height >= 20) e.setAttribute("height", height + px);
              else e.setAttribute("height", '0' + px);
              e.setAttribute("width", width + px);
            }
          }
        } else {
          const width = original_width - (e.pageX - original_mouse_x);
          const height = original_height - (e.pageY - original_mouse_y);
          if (width > minimum_size && height > minimum_size) {
            element.style.width = width + "px";
            element.style.left =
              original_x + (e.pageX - original_mouse_x) + "px";
              element.style.height = height + px;
            element.style.top =
              original_y + (e.pageY - original_mouse_y) + px;
              if(element.style.backgroundImage) {
                element.style.backgroundSize =  width + "px " + height + "px";
              }
              if(element.getElementsByTagName("video")[0]) {
                var e = element.getElementsByTagName("video")[0];
  
                e.setAttribute("width", width + px);
                if(height >= 20) e.setAttribute("height", height + px);
                else e.setAttribute("height", '0' + px);
              }
          }
          if (height > minimum_size) {
            element.style.height = height + "px";
            element.style.top =
              original_y + (e.pageY - original_mouse_y) + "px";
              if(element.style.backgroundImage) {
                if (width >= 20) element.style.backgroundSize =  width + "px " + height + "px";
              }
              if(element.getElementsByTagName("video")[0]) {
                var e = element.getElementsByTagName("video")[0];
  
                if(width >= 20) e.setAttribute("width", width + px);
                e.setAttribute("height", height + px);
              }
          }
        }
      }

      function stopResize() {
        window.removeEventListener("mousemove", resize);
      }
    }
  };

 

  render() {
    return (
      <div style={this.state.MainContainer}>
        <button type="button" onClick={this.state.publish ? null : this._buttonCreateBox} style={{width: 200, height: 100}}>
          Fazer Caixa!
        </button>
        <button type="button" onClick={this.state.publish ? null : this._buttonCreateButton} style={{width: 200, height: 100}}>
          Fazer Botao!
        </button>
        <button type="button" onClick={this.state.publish ? null : () => this._buttonCreateImage("https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=350")} style={{width: 200, height: 100}}>
          Fazer Imagem!
        </button>
        <button type="button" onClick={this.state.publish ? null : this._buttonCreateVideo} style={{width: 200, height: 100}}>
          Fazer Video!
        </button>
        <button type="button" onClick={this.state.publish ? () => this._buttonUnpublish() : () => this._buttonPublish()} style={{width: 200, height: 100}}>
          { this.state.publish ? "Editar!" : "Publicar!"}
        </button>
        { this.state.publish ? 
        
        this.state.TreeMap.map((item, index) => {
          return item;
        }) :

        this.state.ObjectMap.map((item, index) => {
          return item;
        })}
      </div>
    );
  }
}

export default App;
