import { app } from '@sapoto/dependency-injection'
import { ISituationThreadApi } from './server'

export const main = app('main')

export const SITUATION_THREAD_API = main.token<ISituationThreadApi>('ISituationThreadApi')