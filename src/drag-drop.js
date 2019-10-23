import React, { useState } from 'react';
import ResizableRect from 'react-resizable-rotatable-draggable';
/*import ResizableRect from './Resizablegrid';*/
import { jsx, css } from '@emotion/core'
import withStyles from 'react-jss'
function DragDrop({item, setItems}) {	
	console.log('hi');
	
	// var defaultProps = {
	// 	isDraggable: true,
	// 	isResizable: false,
	// 	preventCollision: false,
	// 	// rowHeight: 30,		
	// 	onLayoutChange: function() {},
	//   };
	//var className = item.showLayout ? item.className : item.className + " no-layout";

	const [left, setLeft] = useState(item.left);
	const [top, setTop] = useState(item.top);
	const [width, setWidth] = useState(item.width);
	const [height, setHeight] = useState(item.height);
	const [rotateAngle, setRotateAngle] = useState(item.rotateAngle);
	var handleResize = (style, isShiftKey, type) => {
		// type is a string and it shows which resize-handler you clicked
		// e.g. if you clicked top-right handler, then type is 'tr'
		let { top, left, width, height } = style
		top = Math.round(top)
		left = Math.round(left)
		width = Math.round(width)
		height = Math.round(height)
		setLeft(left);
		setTop(top);
		setWidth(width);
		setHeight(height);		
	};
	var handleRotate = (rotateAngle) => {
		setRotateAngle(rotateAngle);
		//item.showLayout = true;
	}
	var handleDrag = (deltaX, deltaY) => {
		setLeft(left + deltaX);
		setTop(top + deltaY);
		//item.showLayout = true;			
	}
	var handleDragEnd = () =>
	{
		//item.showLayout = false;
	}
	
	/* function onDrag(e)
	{

	
		var style = {
			color: 'white',
			fontSize: 200,	
			 border: '1px',
			 backgroundImage: 'url(/images/' + item.image + ')'
		}; */

		const styles = {	
			myDiv: {
				color: 'green'	
			  },
			  '& .span': {
				// jss-plugin-nested applies this to a child span
				color: 'red' 		
			  }
			  		 
			}
			const Div = ({classes, children}) => (				
			  <div className={classes.myDiv}>
			  abcd
			  <span className='span'>myspan</span>
			  </div>			
			 )
		
			  // Finally, inject the stylesheet into the component.
			  const StyledDiv = withStyles(styles)(Div)
			  

    return (
		// <GridLayout className="react-grid-layout drag-drop" autoSize="false" isRearrangeable="true" isResizable="false" rowHeight="10" preventCollision="true" layout={layout} width="1200">
		// 	<div key="1" className="spoon">a</div>
		// 	<div key="2" className="plate">b</div>
		// 	<div key="3" className="glass">c</div>			
		// </GridLayout>
		<React.Fragment>
			{/* <Draggable
			defaultPosition={{x: 10, y: 10}}
			position={null} 
			scale={1}>			
			<div className="drag-drop plate">			
			</div>			
			</Draggable>
			<Draggable
				defaultPosition={{x: 10, y: 10}}
				onDrag={onDrag}
				scale={1}>			
				<div className="drag-drop spoon">			
				</div>			
			</Draggable>
			<Draggable
			defaultPosition={{x: 220, y: 220}}
			position={null} 
			scale={1}>			
			<div className="drag-drop glass">		  
			</div>			
			</Draggable> */} 
		
			<div css={item}>			
			<ResizableRect 				
					left={left}
					top={top}
					width={width}
					height={height}
					//backgroundImage={'/images/'+item.image}
					rotateAngle={rotateAngle}
					// aspectRatio={false}
					// minWidth={10}
					// minHeight={10}
					//zoomable='n, w, s, e, nw, ne, se, sw'
					//zoomable='nw, ne, se, sw'
					// rotatable={true}
					// onRotateStart={this.handleRotateStart}
					onRotate={handleRotate}
					//onRotateEnd={handleRotateEnd}
					// onResizeStart={this.handleResizeStart}
					onResize={handleResize}
					// onResizeEnd={this.handleUp}
					// onDragStart={this.handleDragStart}
					onDrag={handleDrag}
					onDragEnd={handleDragEnd}
					/>
			</div>					
		</React.Fragment>
		// <ResizableBox width={200} height={200} minConstraints={[100, 100]} maxConstraints={[300, 300]}>
		// 		<div className="drag-drop">
		// 		<div className="handle">Drag from here</div>
		// 		<div>This readme is really dragging on...</div>
		// 		</div>
		// 	</ResizableBox>
    );  
}

export default DragDrop;

