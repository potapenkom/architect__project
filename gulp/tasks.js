var gulp = require('gulp');
var runSequence = require('run-sequence');

var config = require('../package.json').config;

gulp.task('dev', function () {
	runSequence(
		'copy',
		['sass', 'webpack', 'image'],
		'server',
		'copy:watch',
		'sass:watch',
		'webpack:watch',
		'image:watch',
	)
});

gulp.task('prod', function () {
	runSequence(
		'clean',
		'copy',
		['sass', 'webpack-prod', 'image']
	)
});