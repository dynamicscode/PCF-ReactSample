import * as React from 'react';

export interface IProps {
    value: string;
    onChange: (value:string) => void;
}

export interface IState {
    value: string;
}

export class ReactSampleTextBox extends React.Component<IProps, IState> {
    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = { value: props.value};
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(p: IProps) {
        this.setState({value : (p.value)});
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        let value = e.currentTarget.value;
        this.setState({value: value});
        this.props.onChange(value);
    }

    render() {
        return (
            <input id='inputText' value={this.state.value} onChange={this.handleChange} />
        );
    }
}