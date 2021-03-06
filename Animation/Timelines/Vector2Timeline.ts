class Vector2Timepoint extends Timepoint {
    value: Vector2;

    constructor(time: number, value: Vector2) {
        super(time);
        this.value = value;
    }
}

class Vector2Timeline extends Timeline {
    constructor() {
        super();
    }

    createPoint(time: number, value: Vector2): Vector2Timepoint {
        let newPoint: Vector2Timepoint = new Vector2Timepoint(time, value);

        if (this.getNumberOfPoints())
        {
            if(time > this.getLastPoint().time) {
                this.points.push(newPoint);
            } else {
                /*let pointAtGreaterTime: Timepoint =
                    Timepoint.findPointAtGreaterTime(time, this.getFirstPoint());

                Timepoint.linkThreePoints(
                    pointAtGreaterTime.prev, newPoint, pointAtGreaterTime)*/
            }
        }
        else {
            this.points.push(newPoint);
        }

        return null;
    }
}