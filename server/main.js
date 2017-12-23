import { Meteor } from 'meteor/meteor';
import { Bins } from '../import/collections/Bins';

Meteor.startup( () => {
        Meteor.publish( 'bins', function () {
                return Bins.find( { ownerId: this.userId } );
            }
        );
    }
);
