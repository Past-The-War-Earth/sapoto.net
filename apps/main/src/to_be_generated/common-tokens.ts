import { app } from '@sapoto/dependency-injection'
import type { ISituationThreadApi } from '../api/SituationThreadApi';

export const votecube = app('main')

export const SITUATION_THREAD_API = votecube.token<ISituationThreadApi>({
    class: null,
    interface: 'ISituationThreadApi',
    token: 'SITUATION_THREAD_API'
})