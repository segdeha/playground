import React, { Component } from 'react';
import styled from 'styled-components';
import anime from 'animejs';

import { randomColor } from '../lib/random';

class Block extends Component {
    directions = ['alternate', 'reverse'];
    easings = ['easeInQuad', 'easeOutQuad', 'easeInOutQuad', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic', 'easeInQuart', 'easeOutQuart', 'easeInOutQuart', 'easeInQuint', 'easeOutQuint', 'easeInOutQuint', 'easeInSine', 'easeOutSine', 'easeInOutSine', 'easeInExpo', 'easeOutExpo', 'easeInOutExpo', 'easeInCirc', 'easeOutCirc', 'easeInOutCirc', 'easeInBack', 'easeOutBack', 'easeInOutBack', 'easeInElastic', 'easeOutElastic', 'easeInOutElastic'];

    constructor(props) {
        super(props);

        let background = randomColor();
        let delay = anime.random(0, 250);
        let direction = this.directions[anime.random(0, this.directions.length - 1)];
        let duration = anime.random(500, 2000);
        let easing = this.easings[anime.random(0, this.easings.length - 1)];
        let elasticity = anime.random(0, 1000);
        let loop = true;
        let rotate = `${anime.random(90, 450)}deg`;
        let scaleRange = { min: 50, max: 150 };
        let scaleFactor = 100;
        let scaleX = [];
        let scaleY = [];
        let translateX = [];
        let translateY = [];
        for (let i = 0; i < 10; i += 1) {
            scaleX.push(this._keyframe(scaleRange, scaleFactor));
            scaleY.push(this._keyframe(scaleRange, scaleFactor));
            translateX.push(this._keyframe());
            translateY.push(this._keyframe());
        }

        this.state = { background, delay, direction, duration, easing, elasticity, loop, rotate, scaleX, scaleY, translateX, translateY };

        this._animate = this._animate.bind(this);
    }

    _keyframe(range = { min: -50, max: 50 }, factor = 1) {
        let delay = anime.random(0, 250);
        let duration = anime.random(500, 2000);
        let easing = this.easings[anime.random(0, this.easings.length - 1)];
        let elasticity = anime.random(0, 1000);
        let value = anime.random(range.min, range.max) / factor;
        return { delay, duration, easing, elasticity, value };
    }

    _animate() {
        let { delay, direction, duration, easing, elasticity, loop, rotate, scaleX, scaleY, translateX, translateY } = this.state;
        anime({ targets: this.targets, delay, direction, duration, easing, elasticity, loop, rotate, scaleX, scaleY, translateX, translateY });
    }

    componentDidMount() {
        window.requestAnimationFrame(this._animate);
    }

    render() {
        let { background } = this.state;

        // define Item here so each block gets a differnt color
        const Item = styled.div`
            background: ${background};
            box-shadow: rgba(0, 0, 0, 0.25) 0 4px 8px;
            height: 0;
            padding-bottom: 100%;
            width: 100%;
        `;

        return (
            <Item innerRef={target => { this.targets = target }} />
        );
    }
}

export default Block;
