import { app } from '@sapoto/dependency-injection'
import type { ISituationThreadApi } from '../api/SituationThreadApi';

export const main = app('main')

export const SITUATION_THREAD_API = main.token<ISituationThreadApi>({
    class: null,
    interface: 'ISituationThreadApi',
    token: 'SITUATION_THREAD_API'
})