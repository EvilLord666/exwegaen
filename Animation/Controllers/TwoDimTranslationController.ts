class TwoDimTranslationController extends TwoDimTransformController{
    constructor(timeline: TwoDimTransformTimeline, value: Vector2){
        super(timeline, value);
    }

    protected nextPoint(p2: Timepoint): void {
        Vector2.addAssign(
            this.transformed,
            (p2 as TwoDimTransformPoint).value);
    }

    protected thisPoint(p1: Timepoint, t: number): void {
        this.interpolant = Vector2.lerp(new Vector2(), (p1.next as TwoDimTransformPoint).value, t);
        this.transformedInterpolated = Vector2.add(this.transformed, this.interpolant);
    }

    protected prevPoint(p1: Timepoint): void {
        Vector2.subtractAssign(
            this.transformed,
            (p1 as TwoDimTransformPoint).value);
    }
}