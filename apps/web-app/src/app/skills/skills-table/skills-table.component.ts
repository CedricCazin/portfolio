import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Skill, SkillType } from '../skill.interface';
import { SkillsService } from '../skills.service';

@Component({
    selector: 'portfolio-skills-table',
    templateUrl: './skills-table.component.html',
    styleUrls: ['./skills-table.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({ height: '0px', minHeight: '0' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})
export class SkillsTableComponent implements AfterViewInit {
    public _skillType!: SkillType;
    @Input() set skillType(skillType: SkillType) {
        skillType.skills.sort((a, b) => {
            return b.progress - a.progress;
        });
        this._skillType = skillType;
        this.skillsDataSource = new MatTableDataSource(skillType.skills);
    }

    public skillsDataSource?: MatTableDataSource<Skill>;

    public displayedColumns: string[] = ['image', 'name', 'progress', 'expand'];

    public expandedElement: Skill | null = null;

    @ViewChild(MatSort) sort!: MatSort;

    ngAfterViewInit(): void {
        if (this.skillsDataSource) {
            this.skillsDataSource.sort = this.sort;
        }
    }
}
