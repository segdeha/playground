import React, { Component } from 'react';
import styled from 'styled-components';
import anime from 'animejs';

import { randomColor } from '../lib/random';

class Block extends Component {
    easings = ['easeInQuad', 'easeOutQuad', 'easeInOutQuad', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic', 'easeInQuart', 'easeOutQuart', 'easeInOutQuart', 'easeInQuint', 'easeOutQuint', 'easeInOutQuint', 'easeInSine', 'easeOutSine', 'easeInOutSine', 'easeInExpo', 'easeOutExpo', 'easeInOutExpo', 'easeInCirc', 'easeOutCirc', 'easeInOutCirc', 'easeInBack', 'easeOutBack', 'easeInOutBack', 'easeInElastic', 'easeOutElastic', 'easeInOutElastic'];

    constructor(props) {
        super(props);

        let background = randomColor();
        let delay = anime.random(0, 250);
        let direction = 'alternate';
        let duration = anime.random(500, 2000);
        let easing = this.easings[anime.random(0, this.easings.length - 1)];
        let loop = true;
        let rotate = `${anime.random(1,2)}turn`;
        let scale = anime.random(0.75, 1.25);
        let translateX = [`${anime.random(-50, 50)}px`, `${anime.random(-50, 50)}px`];

        this.state = { background, delay, direction, duration, easing, loop, rotate, scale, translateX };

        this._animate = this._animate.bind(this);
    }

    _animate() {
        let { delay, direction, duration, easing, loop, rotate, scale, translateX } = this.state;
        anime({ delay, direction, duration, easing, loop, rotate, scale, targets: this.targets, translateX });
    }

    componentDidMount() {
        window.requestAnimationFrame(this._animate);
    }

    render() {
        let { background } = this.state;

        // define Item here so each block gets a differnt color
        const Item = styled.div`
            background: ${background};
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
