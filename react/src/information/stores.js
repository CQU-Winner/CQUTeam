import { observable, computed, reaction } from 'mobx';
import * as queryString from 'querystring';
import * as axios from 'axios';
import { competTypes, apiRoute } from '../shared/consts';

const competUrl = `${apiRoute}compets`;

export class InfomationStore {
    @observable wd = ''
    @observable sort = 'entry'
    @observable filter = ['', '']
    @observable page = 1

    @observable compets = []
    @observable loadFailed = false;

    @observable isRefreshing = false;

    @computed get hasMore() {
        return this.compets && this.compets.length === 10;
    }

    refresh = async () => {
        if (this.isRefreshing) return;
        this.isRefreshing = true;

        const queryObj = {
            wd: this.wd,
            sort: this.sort,
            page: this.page,
        };
        if (this.filter[1]) queryObj.category = this.filter[1];
        else if (this.filter[0]) queryObj.rough = this.filter[0];

        this.setQueryString(queryObj);

        const timeout = 2000;
        const timeoutId = setTimeout(() => {
            this.loadFailed = true;
        }, timeout);
        const { status, data: rawData } = await axios.get(competUrl, { params: queryObj, timeout });

        if (status >= 200 && status < 300 && rawData.status === 'ok') {
            if (rawData.data instanceof Array) {
                this.compets = rawData.data;
                clearTimeout(timeoutId);
                this.loadFailed = false;
            } else {
                console.error('Error! Received non-Array data');
                this.loadFailed = true;
            }
        } else {
            console.error(status, rawData && rawData.msg);
            this.loadFailed = true;
        }

        this.isRefreshing = false;
    }

    constructor(setQueryString) {
        this.setQueryString = setQueryString;

        const { wd, sort, page, category, rough } = queryString.parse(window.location.search.split('?')[1]);
        
        this.wd = wd || this.wd;
        this.sort = sort || this.sort;
        this.page = page || this.page;
        if (competTypes.map(v => v.value).includes(rough)) {
            this.filter[0] = rough;
        }
        if (category) {
            const competType = competTypes.filter(type => type.children && type.children.map(v => v.value).includes(category))[0];
            if (competType) {
                this.filter = [competType.value, category];
            }
        }

        ['wd', 'sort', 'filter'].forEach(value => reaction(() => this[value], () => {
            if (this.page === 1) this.refresh();
            else this.page = 1;
        }));

        reaction(() => this.page, () => this.refresh());
    }
}
