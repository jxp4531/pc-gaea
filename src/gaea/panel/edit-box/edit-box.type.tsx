import * as React from 'react'
import Application from '../../store/application'
import Viewport from '../../store/viewport'

export interface PropsDefine {
    viewport?: Viewport
    application?: Application
}

export class Props implements PropsDefine {

}

export interface StateDefine {
    // 动画状态
    animateStatus?: string
}

export class State implements StateDefine {
    animateStatus = 'init'
}