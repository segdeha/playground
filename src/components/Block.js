import React, { Component } from 'react';
import styled from 'styled-components';
import anime from 'animejs';

import { randomColor } from '../lib/random';

class Block extends Component {
    directions = ['alternate', 'reverse'];
    easings = {
        base: 'ease',
        directions: ['In', 'Out', 'InOut'],
        curves: ['Quad', 'Cubic', 'Quart', 'Quint', 'Sine', 'Expo', 'Back', 'Circ', 'Elastic']
    };

    constructor(props) {
        super(props);

        let background = randomColor();
        let delay = anime.random(0, 250);
        let direction = this.directions[anime.random(0, this.directions.length - 1)];
        let duration = anime.random(500, 2000);
        let easing = this._randomEasing();
        let elasticity = anime.random(0, 1000);
        let loop = true;
        let rotate = `${anime.random(90, 450)}deg`;
        let scaleX = this._generateKeyframes(10, { min: 50, max: 150 }, 100);
        let scaleY = this._generateKeyframes(10, { min: 50, max: 150 }, 100);
        let translateX = this._generateKeyframes();
        let translateY = this._generateKeyframes();

        this.state = {
            background,
            delay,
            direction,
            duration,
            easing,
            elasticity,
            loop,
            rotate,
            scaleX,
            scaleY,
            translateX,
            translateY
        };

        this._animate = this._animate.bind(this);
    }

    _randomEasing() {
        let base = this.easings.base;
        let direction = this.easings.directions[anime.random(0, this.easings.directions.length - 1)];
        let curve = this.easings.curves[anime.random(0, this.easings.curves.length - 1)];
        return `${base}${direction}${curve}`;
    }

    _keyframe(range, factor) {
        let delay = anime.random(0, 250);
        let duration = anime.random(500, 2000);
        let easing = this._randomEasing();
        let elasticity = anime.random(0, 1000);
        let value = anime.random(range.min, range.max) / factor;
        return { delay, duration, easing, elasticity, value };
    }

    _generateKeyframes(num = 10, range = { min: -50, max: 50 }, factor = 1) {
        let keyframes = [];
        for (let i = 0; i < num; i += 1) {
            keyframes[i] = this._keyframe(range, factor);
        }
        return keyframes;
    }

    _animate() {
        anime({ targets: this.targets, ...this.state });
    }

    componentDidMount() {
        window.requestAnimationFrame(this._animate);
    }

    render() {
        let { background } = this.state;

        // define Item here so each block gets a different color
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
