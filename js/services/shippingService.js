export function shipment(order) {
    const basicValue = order.basic;

    if (basicValue < 100) {
        return 20.0;
    } else if (basicValue < 200) {
        return 12.0;
    }
    else {
        return 0;
    }
}