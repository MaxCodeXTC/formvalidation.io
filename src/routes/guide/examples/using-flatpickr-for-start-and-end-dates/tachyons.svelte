<TachyonsLayout>
    <ResourceLoader urls={[
        'https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.5.0/flatpickr.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.5.0/flatpickr.min.js',
    ]} onLoaded={onLoaded}>
        <form id="demoForm" method="POST" style="height: 480px;">
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Event</div>
                    <div class="fl w-75">
                        <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="name" />
                    </div>
                </div>
            </div>
        
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Start date</div>
                    <div class="fl w-50">
                        <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="startDate" placeholder="YYYY/MM/DD" />
                    </div>
                </div>
            </div>
        
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">End date</div>
                    <div class="fl w-50">
                        <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="endDate" placeholder="YYYY/MM/DD" />
                    </div>
                </div>
            </div>
        </form>
    </ResourceLoader>
</TachyonsLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import StartEndDate from 'formvalidation/dist/es6/plugins/StartEndDate';
import Tachyons from 'formvalidation/dist/es6/plugins/Tachyons';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';

import sampleCode from './tachyons.programmatic';
import ResourceLoader from '../../../../components/ResourceLoader.svelte';
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

let fv;

const onLoaded = () => {
    const form = document.getElementById('demoForm');
    fv = formValidation(form, {
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: 'The event name is required'
                    },
                }
            },
            startDate: {
                validators: {
                    notEmpty: {
                        message: 'The start date is required'
                    },
                }
            },
            endDate: {
                validators: {
                    notEmpty: {
                        message: 'The end date is required'
                    },
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            startEndDate: new StartEndDate({
                format: 'YYYY/MM/DD',
                startDate: {
                    field: 'startDate',
                    message: 'The start date must be a valid date and ealier than the end date'
                },
                endDate: {
                    field: 'endDate',
                    message: 'The end date must be a valid date and later than the start date'
                },
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/using-flatpickr-for-start-and-end-dates/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    flatpickr(form.querySelector('[name="startDate"]'), {
        enableTime: false,
        // See https://flatpickr.js.org/formatting/
        dateFormat: 'Y/m/d',
        // After selecting a date, we need to revalidate the field
        onChange: () => {
            fv.revalidateField('startDate');
        },
    });

    flatpickr(form.querySelector('[name="endDate"]'), {
        enableTime: false,
        dateFormat: 'Y/m/d',
        onChange: () => {
            fv.revalidateField('endDate');
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>
