<BootstrapLayout>
    <ResourceLoader urls={[
        'https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.10/summernote-bs4.css',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/js/bootstrap.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.10/summernote-bs4.min.js',
    ]} onLoaded={onLoaded}>
        <form id="demoForm" method="POST">
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Post title</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" name="title" />
                </div>
            </div>
        
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Post content</label>
                <div class="col-sm-9">
                    <textarea class="form-control" name="content" style="height: 400px;"></textarea>
                </div>
            </div>
        
            <div class="form-group row">
                <div class="col-sm-9 offset-sm-3">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </ResourceLoader>
</BootstrapLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Bootstrap from 'formvalidation/dist/es6/plugins/Bootstrap';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './bootstrap.programmatic';
import BootstrapLayout from '../../../../components/demo/BootstrapLayout.svelte';
import ResourceLoader from '../../../../components/ResourceLoader.svelte';

let fv;

const onLoaded = () => {
    fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            title: {
                validators: {
                    notEmpty: {
                        message: 'The title is required and cannot be empty'
                    }
                }
            },
            content: {
                validators: {
                    callback: {
                        message: 'The content is required and cannot be empty',
                        callback: (input) => {
                            const code = jQuery('[name="content"]').summernote('code');
                            // <p><br></p> is code generated by Summernote for empty content
                            return (code !== '' && code !== '<p><br></p>');
                        }
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            bootstrap: new Bootstrap(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/integrating-with-summernote/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    });

    jQuery('[name="content"]')
        .summernote({
            height: 400
        })
        .on('summernote.change', function(customEvent, contents, $editable) {
            // Revalidate the content when its value is changed by Summernote
            fv.revalidateField('content');
        });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>
