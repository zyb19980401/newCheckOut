/**
 * Hierarchical table rows object
 *
 * @param {object} options tableSelector e.g. 'table'
 *                         parentClass e.g. 'parent'
 *                         collapsedClass e.g. 'hidden'
 *                         childClassPrefix e.g. 'parentId'
 * @type function
 * @return object
 * @licence MIT
 */
var treeTable = function (options) {
    'use strict';

    var tableSelector = (options && options.tableSelector) || 'table';
    var parentClass  = (options && options.parentClass) || 'header';
    var childClassPrefix = (options && options.childClassPrefix) || '';
    var collapsedClass = (options && options.collapsedClass) || 'collapsed';

    /**
     * Recursively hide all child rows or show immediate children
     *
     * All direct children must have a class that is the same as the parent id
     * with an optional prefix
     *
     * @param {object} parentRow row element object
     */
    var toggleRowChildren = function(parentRow) {
        var toggle = function(row) {
            row.style.display = row.style.display ? '' : 'none';
            return row;
        };

        var collapsible = function(row) {
            return row.classList.contains(parentClass) &&
                !row.classList.contains(collapsedClass);
        };

        var childClass = childClassPrefix + parentRow.getAttribute('id');

        var childrenRows = parentRow.parentNode.querySelectorAll('tr.'+childClass);

        // toggle all the children
        childrenRows.forEach(function(row){
            toggle(row);
            // if a child is a parent and isn't collapsed
            if (collapsible(row)) {
                // recurse to the child
                toggleRowChildren(row);
            }
        });

        // 'mark' that the child has been hidden or not
        parentRow.classList.toggle(collapsedClass);
    };

    return {
        init : function() {
            /**
             * event delegation on the table rather than on the rows
             * @link https://davidwalsh.name/event-delegate
             */
            document.querySelectorAll(tableSelector).forEach(function (table) {
                table.addEventListener('click', function (elem) {
                    // click happens on the td/th element, need the parent
                    if (elem.target && elem.target.parentNode.matches('tr.'+parentClass)) {
                        toggleRowChildren(elem.target.parentNode);
                    }
                });
            });
        }
    };
};

(function () {
    var myTreeTable = treeTable({
        parentClass: 'parent',
        collapsedClass: 'active',
        childClassPrefix: 'child-'
    });
    // only this bit actually needs to wait for the DOM
    document.addEventListener("DOMContentLoaded", myTreeTable.init.bind(myTreeTable));
})();
