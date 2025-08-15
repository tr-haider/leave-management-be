"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsLessThanOrEqual = IsLessThanOrEqual;
const class_validator_1 = require("class-validator");
function IsLessThanOrEqual(property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isLessThanOrEqual',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [property],
            validator: {
                validate(value, args) {
                    const [relatedPropertyName] = args.constraints;
                    const relatedValue = args.object[relatedPropertyName];
                    return (typeof value === 'number' &&
                        typeof relatedValue === 'number' &&
                        value <= relatedValue);
                },
            },
        });
    };
}
//# sourceMappingURL=is-less-than-or-equal.validator.js.map