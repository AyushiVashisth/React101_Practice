export function RestaurantCard({
    brand,
    category,
    price,
    id
}){
    return (
        <tr data-testid="item">
            <td>{id}</td>
            <td data-testid="brand">
            </td>
            <td data-testid="category">
            </td>
            <td data-testid="price">
            </td>
                    </tr>
    )
}
