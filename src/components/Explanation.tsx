import {default as React, ReactElement} from 'react';

export default function Explanation(): ReactElement {
    return (
        <>
            <p>
                For people who want to get more done in their day, Time Bend is a productivity app that
                causes you to significantly cut down on time wasted procrastinating. Unlike other
                productivity apps, Time Bend actually works, and requires only a few minutes of investment
                per day.
            </p>
            <p>
                Read Chetan Surpur's{' '}
                <a href='http://chetansurpur.com/blog/2012/10/time-bending.html'>short article</a> for
                instructions. You can drag and drop tasks to reorder them.
            </p>
            <p>
                You can also use the{' '}
                <a href='https://play.google.com/store/apps/details?id=io.github.neelkamath.timebend'>
                    Android app
                </a>.
            </p>
            <p>
                This project is open source on{' '}
                <a href='https://github.com/neelkamath/time-bend-web'>GitHub</a>.
            </p>
        </>
    );
}