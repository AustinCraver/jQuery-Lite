$(document).ready(function() {
    /*
Earned Badges
This table contains badges earned by a user, including the most recent date achieved, the type, the name, the # of energy points earned, and the activity earned from.
Collected by: https://www.khanacademy.org/profile/chopsor/
*/

/* Begin Pre-coded values */
CREATE TABLE badges (
    date TEXT,
    badge_type TEXT,
    badge_name TEXT,
    energy_points INTEGER
);

/* Pre-coded values */
INSERT INTO badges (date, badge_type, badge_name, energy_points) VALUES ("2015, 04/12", "Sun", "Oracle", 0);

INSERT INTO badges (date, badge_type, badge_name, energy_points) VALUES ("2015, 04/28", "Earth", "Incredible Inspiration", 5000);

INSERT INTO badges (date, badge_type, badge_name, energy_points) VALUES ("2015, 01/29", "Challenge Patch", "Intro to JS: Drawing & Animation Mastery", 0);

INSERT INTO badges (date, badge_type, badge_name, energy_points) VALUES ("2014, 12/05", "Meteorite", "Thumbs Up", 0);

INSERT INTO badges (date, badge_type, badge_name, energy_points) VALUES ("2015, 04/28", "Moon", "1000 Kelvin", 1000);

INSERT INTO badges (date, badge_type, badge_name, energy_points) VALUES ("2015, 04/25", "Earth", "299,792,458 Meters per Second", 5000);

INSERT INTO badges (date, badge_type, badge_name, energy_points) VALUES ("2015, 03/20", "Sun", "Da Vinci", 200000);

INSERT INTO badges (date, badge_type, badge_name, energy_points) VALUES ("2015, 03/02", "Sun", "Newton", 150000);

INSERT INTO badges (date, badge_type, badge_name, energy_points) VALUES ("2015, 03/02", "Sun", "Hypatia", 125000);

INSERT INTO badges (date, badge_type, badge_name, energy_points) VALUES ("2015, 02/24", "Sun", "Kepler", 125000);

INSERT INTO badges (date, badge_type, badge_name, energy_points) VALUES ("2015, 02/24", "Sun", "Copernicus", 80000);

INSERT INTO badges (date, badge_type, badge_name, energy_points) VALUES ("2015, 02/07", "Sun", "Sally Ride", 35000);

INSERT INTO badges (date, badge_type, badge_name, energy_points) VALUES ("2015, 01/06", "Sun", "Magellan", 30000);

INSERT INTO badges (date, badge_type, badge_name, energy_points) VALUES ("2015, 02/24", "Earth", "Guru", 0);

INSERT INTO badges (date, badge_type, badge_name, energy_points) VALUES ("2014, 12/29", "Earth", "Work Horse", 14000);

INSERT INTO badges (date, badge_type, badge_name, energy_points) VALUES ("2014, 10/20", "Moon", "Redwood", 0);

INSERT INTO badges (date, badge_type, badge_name, energy_points) VALUES ("2013, 10/20", "Meteorite", "Cypress", 0);

INSERT INTO badges (date, badge_type, badge_name, energy_points) VALUES ("2015, 03/18", "Sun", "Millionaire", 0);

INSERT INTO badges (date, badge_type, badge_name, energy_points) VALUES ("2015, 02/27", "Earth", "Five Times Ten to the Fifth", 0);

INSERT INTO badges (date, badge_type, badge_name, energy_points) VALUES ("2015, 04/04", "Earth", "Investigator", 0);

/* End Pre-coded values */


/* Begin original code values */

/* Select all from badges */
SELECT * FROM badges;

/* Selects badge names with more than 10000 energy points */
SELECT badge_name 
    AS Lots_of_Engery_Points 
    FROM badges 
    WHERE energy_points > 10000; 

/* Basically selects all badge types */
SELECT badge_type 
    FROM badges 
    AS Total_Energy_Points 
    GROUP BY energy_points 
    HAVING COUNT(*) >= 0;

/* Grouped by badge name */
SELECT badge_name, SUM(energy_points) 
    AS Badge_Energy 
    FROM badges 
    GROUP BY badge_name;

/* You've read this far! Thank you so much. Cheers! */
SELECT * 
    FROM badges 
    WHERE badge_type = "Sun" 
    OR badge_name = "Sally Ride";


/* The End */

/* P.S. I'm really new to JQuery Lite and as such, I am still learning how to properly format my code. I tried to make it easy to read.  */

});
