import React from 'react';
import {INITIAL_VALUE, ReactSVGPanZoom, TOOL_NONE} from 'react-svg-pan-zoom';

export default class App extends React.PureComponent {

  state = {tool: TOOL_NONE, value: INITIAL_VALUE}
  Viewer = null

  componentDidMount() {
    this.Viewer.fitToViewer();
  }

  changeTool(nextTool) {
    this.setState({tool: nextTool})
  }

  changeValue(nextValue) {
    this.setState({value: nextValue})
  }

  fitToViewer() {
    this.Viewer.fitToViewer()
  }

  fitSelection() {
    this.Viewer.fitSelection(40, 40, 200, 200)
  }

  zoomOnViewerCenter() {
    this.Viewer.zoomOnViewerCenter(1.1)
  }

  render() {
    return (
      <div>
        {/* Read all the available methods in the documentation */}
        <button className="btn" onClick={() => this.zoomOnViewerCenter()}>Zoom in</button>
        <button className="btn" onClick={() => this.fitSelection()}>Zoom area 200x200</button>
        <button className="btn" onClick={() => this.fitToViewer()}>Fit</button>

        <hr/>

        <ReactSVGPanZoom
          width={500} height={500}
          ref={Viewer => this.Viewer = Viewer}
          tool={this.state.tool} onChangeTool={tool => this.changeTool(tool)}
          value={this.state.value} onChangeValue={value => this.changeValue(value)}

          onZoom={e => console.log('zoom')}
          onPan={e => console.log('pan')}

          onClick={event => console.log('click', event.x, event.y, event.originalEvent)}
        >
          <svg width={617} height={316}>
            <g fillOpacity=".5" strokeWidth="4">
              <rect x="400" y="40" width="100" height="200" fill="#4286f4" stroke="#f4f142"/>
              <circle cx="108" cy="108.5" r="100" fill="#0ff" stroke="#0ff"/>
              <circle cx="180" cy="209.5" r="100" fill="#ff0" stroke="#ff0"/>
              <circle cx="220" cy="109.5" r="100" fill="#f0f" stroke="#f0f"/>
            </g>
          </svg>
        </ReactSVGPanZoom>
      </div>
    );
  }
}
