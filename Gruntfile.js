module.exports = function (grunt) {
    'use strict';
    grunt.loadNpmTasks('grunt-aws-lambda');
    grunt.initConfig({
        lambda_invoke: { default: {} },
        lambda_package: { default: {} },
        lambda_deploy: {
            default: {
                arn: "arn:aws:lambda:us-east-1:199947497176:function:sln-broker",
                options: {

                }
            }
        }
    });
    grunt.registerTask('deploy', [
        'lambda_package',
        'lambda_deploy'
    ]);
    grunt.registerTask('package', [
        'lambda_package'
    ]);
    grunt.registerTask('invoke', [
        'lambda_invoke'
    ]);
};
