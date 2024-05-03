import { CommonModule as AngularCommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Observable, of } from 'rxjs';

import MarkdownIt from 'markdown-it';

import { full as mitEmoji } from 'markdown-it-emoji';
import mitContainer from 'markdown-it-container';
import mitFootnote from 'markdown-it-footnote';
import mitAbbr from 'markdown-it-abbr';
import mitSup from 'markdown-it-sup';
import mitSub from 'markdown-it-sub';
import mitMark from 'markdown-it-mark';
import mitIns from 'markdown-it-ins';
// import  from 'markdown-it-deflist';
// import  from 'markdown-it-cjk-breaks';
// import  from 'markdown-it-for-inline';

import ClipboardJS from 'clipboard';

import { alert as mditAlert } from '@mdit/plugin-alert';
import { imgSize as mditImgSize } from '@mdit/plugin-img-size';
import { imgLazyload as mditImgLazyload } from '@mdit/plugin-img-lazyload';
import { imgMark as mditImgMark } from '@mdit/plugin-img-mark';
import { tab as mditTab } from '@mdit/plugin-tab';
import { tasklist as mditTasklist } from '@mdit/plugin-tasklist';
import { figure as mditFigure } from '@mdit/plugin-figure';
import { align as mditAlign } from '@mdit/plugin-align';
import { attrs as mditAttrs } from '@mdit/plugin-attrs';
// import { snippet as mditSnippet } from '@mdit/plugin-snippet';
// import { mark } from '@mdit/plugin-mark';
// import { footnote } from '@mdit/plugin-footnote';
// import { container } from '@mdit/plugin-container';

import hljs, { HLJSApi } from 'highlight.js';

import { TrustHtml } from '../trust.pipes/trust-html';

interface Content {
    name: string;
    path: string;
    icon?: string;
    order?: number;
    content?: string;
    children?: Content[];
}

@Component({
    standalone: true,
    imports: [AngularCommonModule, MatCardModule, TrustHtml],
    template: `
        <mat-card>
            <mat-card-content>
                <div class="markdown-content" [innerHTML]="content$ | async | trustHtml"></div>
            </mat-card-content>
        </mat-card>
    `,
    styles: `
        :host {
            display: flex;
            flex-direction: column;
            flex: 1;

            margin: 0 auto;
            width: 100%;
            max-width: 1200px;

            mat-card {
                mat-card-content {
                    padding: 30px;

                    .markdown-content {
                        .code-content {
                            position: relative;

                            .label {
                                text-transform: uppercase;
                                font-size: 0.75rem;
                                line-height: 1rem;
                                font-weight: 700;
                                padding-top: 0.25rem;
                                padding-bottom: 0.25rem;
                                padding-left: 0.5rem;
                                padding-right: 0.5rem;
                                border-bottom-left-radius: 0.375rem;
                                top: 0;
                                right: 0;
                                position: absolute;

                                .copy-code {
                                    background-color: transparent;
                                    border: 0;
                                }
                            }
                        }

                        a {
                            color: #005cbb;
                        }
                    }
                }
            }
        }
    `,
})
export class MarkdownContentComponent {
    private md: MarkdownIt;
    private hljs: HLJSApi;
    private clipboard: ClipboardJS;

    public content$: Observable<string> = of('');

    @HostBinding('class.markdown-content') markdownContentClass = true;

    @Input() set contentUri(value: string) {
        this.httpClient.get(value, { responseType: 'text' }).subscribe((content) => {
            this.content$ = of(this.md.render(content));
        });
    }

    constructor(private readonly httpClient: HttpClient) {
        this.hljs = hljs;
        this.clipboard = new ClipboardJS('.copy-code');

        this.md = MarkdownIt({
            highlight: (str, lang) => {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        const code = this.hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
                        return `<pre class="code-content ${lang}"><span class="label">${lang} <button class="copy-code" data-clipboard-text="${str}" title="Copy">📋</button></span><code class="highlightElement hljs scrollbar">${code}</code></pre>`;
                    } catch (__) {
                        console.log(__);
                    }
                }

                return `<pre><code class="${lang}">${this.md.utils.escapeHtml(str)}</code></pre>`;
            },
        });

        this.md.use(mitEmoji);
        this.md.use(mitFootnote);
        this.md.use(mitContainer);
        this.md.use(mitAbbr);
        this.md.use(mitSup);
        this.md.use(mitSub);
        this.md.use(mitMark);
        this.md.use(mitIns);

        this.md.use(mditAlert);
        this.md.use(mditImgSize);
        this.md.use(mditImgLazyload);
        this.md.use(mditFigure);
        this.md.use(mditTasklist);
        this.md.use(mditImgMark);
        this.md.use(mditAttrs);
        this.md.use(mditAlign);
        this.md.use(mditTab, {
            name: 'tabs',
        });
        // this.md.use(mditSnippet);
        // this.md.use(mark);
        // this.md.use(footnote);
        // this.md.use(container, {});
    }
}
