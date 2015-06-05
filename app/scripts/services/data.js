'use strict';

/**
 * @ngdoc service
 * @name mbnaApplicationApp.data
 * @description
 * # data
 * Service in the mbnaApplicationApp.
 */
angular.module('mbnaApplicationApp')
  .service('data', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
        this.formdata = {};
        this.provinces = [
            {'code': '0', 'text': 'Select your province'},
            {'code': 'AB', 'text': 'Alberta'},
            {'code': 'BC', 'text': 'British Columbia'},
            {'code': 'MB', 'text': 'Manitoba'},
            {'code': 'NB', 'text': 'New Brunswick'},
            {'code': 'NL', 'text': 'Newfoundland and Labrador'},
            {'code': 'NT', 'text': 'Northwest Territories'},
            {'code': 'NS', 'text': 'Nova Scotia'},
            {'code': 'NU', 'text': 'Nunavut'},
            {'code': 'ON', 'text': 'Ontario'},
            {'code': 'PE', 'text': 'Prince Edward Island'},
            {'code': 'QC', 'text': 'Quebec'},
            {'code': 'SK', 'text': 'Saskatchewan'},
            {'code': 'YT', 'text': 'Yukon'}
        ]

        // Set the default select options
        this.formdata.employmentStatus = 0;
        this.formdata.province         = 0;
        this.formdata.workProvince     = 0;
        this.formdata.occupation       = 0;
        this.formdata.incomeFreq       = 0;
        this.formdata.otherIncome      = 0;
        this.formdata.otherIncomeFreq  = 0;
        this.formdata.otherSource      = 0;
        this.formdata.businessNature   = 0;
        this.formdata.studentStatus    = 0;
        this.formdata.personalSource   = 0;
        this.formdata.incomeFrequency  = 0;

        this.formdata.xferCard = {};

        this.clearData = function() {
            this.formdata = {};
        }
  });
