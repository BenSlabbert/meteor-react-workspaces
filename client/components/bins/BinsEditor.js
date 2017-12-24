import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';

// imports and executes this code
import 'codemirror/mode/markdown/markdown';

class BinsEditor extends Component {

    onEditorChange( newContent ) {
        Meteor.call( 'bins.update', this.props.bin._id, newContent );
    }

    render() {
        return (
            <div className="col-xs-8">
                <h5>Input</h5>
                <CodeMirror
                    value={this.props.bin.content}
                    onChange={this.onEditorChange.bind( this )}
                    options={{ mode: 'markdown', lineNumbers: true }}/>
            </div>
        );
    }
}

export default BinsEditor;
