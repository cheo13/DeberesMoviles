import React, { useState, useEffect, useCallback } from 'react';
import { Input, Button, Form, Typography, notification } from 'antd';

const { Title, Text } = Typography;

enum CandyColor {
    Red = 'Red',
    Blue = 'Blue',
    Green = 'Green'
}

enum CandyFlavor {
    Strawberry = 'Strawberry',
    Blueberry = 'Blueberry',
    Lime = 'Lime'
}

enum CandyShape {
    Heart = 'Heart',
    Circle = 'Circle',
    Star = 'Star'
}

const useCandyCreator = () => {
    const [color, setColor] = useState<CandyColor>(CandyColor.Red);
    const [flavor, setFlavor] = useState<CandyFlavor>(CandyFlavor.Strawberry);
    const [shape, setShape] = useState<CandyShape>(CandyShape.Heart);

    useEffect(() => {
        console.log("Loading recommendations...");
    }, []);

    const handleColorChange = useCallback((value: CandyColor) => {
        setColor(value);
    }, []);

    const handleFlavorChange = useCallback((value: CandyFlavor) => {
        setFlavor(value);
    }, []);

    const handleShapeChange = useCallback((value: CandyShape) => {
        setShape(value);
    }, []);

    const createCandy = useCallback(() => {
        notification.success({
            message: 'Candy Created',
            description: `Your ${color}, ${flavor}, ${shape} shaped candy has been created successfully.`,
            placement: 'bottomRight'
        });
    }, [color, flavor, shape]);

    return {
        color,
        flavor,
        shape,
        handleColorChange,
        handleFlavorChange,
        handleShapeChange,
        createCandy
    };
};

const CandyCreator: React.FC = () => {
    const {
        color,
        flavor,
        shape,
        handleColorChange,
        handleFlavorChange,
        handleShapeChange,
        createCandy
    } = useCandyCreator();

    return (
        <div>
            <Title level={2}>Create Your Own Candy</Title>
            <Form>
                <Form.Item label="Color">
                    <Input value={color} onChange={e => handleColorChange(e.target.value as CandyColor)} placeholder="e.g., Red" />
                </Form.Item>
                <Form.Item label="Flavor">
                    <Input value={flavor} onChange={e => handleFlavorChange(e.target.value as CandyFlavor)} placeholder="e.g., Strawberry" />
                </Form.Item>
                <Form.Item label="Shape">
                    <Input value={shape} onChange={e => handleShapeChange(e.target.value as CandyShape)} placeholder="e.g., Heart" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={createCandy}>
                        Create Candy
                    </Button>
                </Form.Item>
            </Form>
            <div>
                <Title level={4}>Your Current Configuration:</Title>
                <Text>Color: {color}</Text>
                <br />
                <Text>Flavor: {flavor}</Text>
                <br />
                <Text>Shape: {shape}</Text>
            </div>
        </div>
    );
}

export default CandyCreator;
