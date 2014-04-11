'use strict';
describe('Service: angelloModel', function() {
	// load the service's module
	beforeEach(module('Angello'));

	var modelService;

	// Initialize the service
	beforeEach(inject(function (angelloModel) {
		modelService = angelloModel;
	}));

	describe('#getStatuses', function() {
		it('should return seven different statuses', function () {
			expect(modelService.getStatuses().length).toBe(7);
		});

		it('should have a status named "To Do"', function() {
			expect(modelService.
				getStatuses().
				map(function(status) {
					return status.name;	// get just the name of each status
				})).
				toContain('To Do');
		});
	});

	describe('#getTypes', function() {
		it('should return four different types', function () {
			expect(modelService.getTypes().length).toBe(4);
		});

		it('should have a type named "Feature"', function() {
			expect(modelService.getTypes().map(function(type) {return type.name;})).toContain('Feature');
		});

		it('should have a type named "Enhancement"', function() {
			expect(modelService.getTypes().map(function(type) {return type.name;})).toContain('Enhancement');
		});

		it('should have a type named "Bug"', function() {
			expect(modelService.getTypes().map(function(type) {return type.name;})).toContain('Bug');
		});

		it('should have a type named "Spike"', function() {
			expect(modelService.getTypes().map(function(type) {return type.name;})).toContain('Spike');
		});
	});

	describe('#getStories', function() {
		it('should return six different stories', function () {
			expect(modelService.getStories().length).toBe(6);
		});

		it('should return stories that have a description property', function() {
			expect(modelService.
				getStories().
				forEach(function(story){
					expect(story.description).toBeDefined();
				}));
		});
	});
});