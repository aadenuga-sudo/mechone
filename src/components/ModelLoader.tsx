// Optimized ModelLoader.tsx
import { useGLTF } from '@react-three/drei';
import React, { useEffect, useMemo } from 'react';
import * as THREE from 'three';
import ProceduralGear from './ProceduralGear';

// --- STATIC DATA (Moved outside component to prevent recreation on every render) ---
const MODEL_MAP: Record<string, string> = {
  'rack_pinion': '/models/rack_pinion.glb',
  'rack_and_pinion': '/models/rack_pinion.glb',
  'rack': '/models/rack_pinion.glb',
  'robot': '/models/robot.glb',
  'mechanical_robot': '/models/robot.glb',
  'general_robot': '/models/robot.glb',
  'autonomous_robot': '/models/robot.glb',
  'mobile_robot': '/models/robot.glb',
  'v8_engine': '/models/v8_engine.glb',
  'engine': '/models/v8_engine.glb',
  'v8': '/models/v8_engine.glb',
  'linkage': '/models/linkage.glb',
  'four_bar_linkage': '/models/linkage.glb',
  'mechanical_linkage': '/models/linkage.glb',
  'gearbox': '/models/worm_gear_box.glb',
  'gear_box': '/models/worm_gear_box.glb',
  'gear-box': '/models/worm_gear_box.glb',
  'link_mechanism': '/models/linkage.glb',
  'linkage_mechanism': '/models/linkage.glb',
  'four_bar': '/models/linkage.glb',
  'mechanism': '/models/linkage.glb',
  'pulley': '/models/pulley.glb',
  'pulley_system': '/models/pulley.glb',
  'actuator': '/models/actuator.glb',
  'linear_actuator': '/models/actuator.glb',
  'robot_arm': '/models/robot_arm.glb',
  'robotic_arm': '/models/robot_arm.glb',
  'articulated_arm': '/models/robot_arm.glb',
  'industrial_robot': '/models/robot_arm.glb',
  '6_axis_robot': '/models/robot_arm.glb',
  'manipulator': '/models/robot_arm.glb',
  'arm': '/models/robot_arm.glb',
  'piston': '/models/piston.glb',
  'reciprocating_piston': '/models/piston.glb',
  'engine_piston': '/models/piston.glb',
  'crankshaft': '/models/crankshaft.glb',
  'crank_shaft': '/models/crankshaft.glb',
  'crank': '/models/crankshaft.glb',
  'engine_crankshaft': '/models/crankshaft.glb',
  'ball_bearing': '/models/ball_bearing.glb',
  'bearing': '/models/ball_bearing.glb',
  'deep_groove_bearing': '/models/ball_bearing.glb',
  'rolling_bearing': '/models/ball_bearing.glb',
  'chain_sprocket': '/models/chain_and_sprocket.glb',
  'chain_and_sprocket': '/models/chain_and_sprocket.glb',
  'sprocket': '/models/chain_and_sprocket.glb',
  'chain_drive': '/models/chain_and_sprocket.glb',
  'chain': '/models/chain_and_sprocket.glb',
  'knuckle_joint': '/models/knuckle_joint.glb',
  'knuckle': '/models/knuckle_joint.glb',
  'articulated_joint': '/models/knuckle_joint.glb',
  'leaf_spring': '/models/leaf_spring.glb',
  'spring': '/models/leaf_spring.glb',
  'suspension_spring': '/models/leaf_spring.glb',
  'automotive_spring': '/models/leaf_spring.glb',

  'shock': '/models/leaf_spring.glb',
  'damper': '/models/leaf_spring.glb',
  'suspension_damper': '/models/leaf_spring.glb',
  'shock_damper': '/models/leaf_spring.glb',
  'articulated_coupling': '/models/articulated_coupling.glb',
  'coupling': '/models/articulated_coupling.glb',
  'flexible_coupling': '/models/articulated_coupling.glb',
  'shaft_coupling': '/models/articulated_coupling.glb',
  'flywheel': '/models/flywheel.glb',
  'fly_wheel': '/models/flywheel.glb',
  'engine_flywheel': '/models/flywheel.glb',
  'inertia_wheel': '/models/flywheel.glb',
  'worm_gearbox': '/models/worm_gear_box.glb',
  'worm_gear_box': '/models/worm_gear_box.glb',
  'worm_gear': '/models/worm_gear_box.glb',
  'worm_drive': '/models/worm_gear_box.glb',
  'worm_reducer': '/models/worm_gear_box.glb',
  'heat_exchanger': '/models/heat_exchanger.glb',
  'exchanger': '/models/heat_exchanger.glb',

  'cooling_system': '/models/heat_exchanger.glb',
  'air_compressor': '/models/air_compressor.glb',
  'compressor': '/models/air_compressor.glb',
  'pneumatic_compressor': '/models/air_compressor.glb',
  'reciprocating_compressor': '/models/air_compressor.glb',
  'air_pump': '/models/air_compressor.glb',
  'universal_joint': '/models/universal_joint.glb',
  'u_joint': '/models/universal_joint.glb',
  'cardan_joint': '/models/universal_joint.glb',
  'cross_joint': '/models/universal_joint.glb',
  'ujoint': '/models/universal_joint.glb',
  'driveshaft_joint': '/models/universal_joint.glb',
  'ball_joint': '/models/ball_joint.glb',
  'suspension_ball_joint': '/models/ball_joint.glb',
  'steering_ball_joint': '/models/ball_joint.glb',
  'spherical_joint': '/models/ball_joint.glb',
  'automotive_ball_joint': '/models/ball_joint.glb',
  'threaded_rod': '/models/threaded_rod.glb',
  'all_thread': '/models/threaded_rod.glb',
  'threaded_bar': '/models/threaded_rod.glb',
  'studding': '/models/threaded_rod.glb',
  'thread_rod': '/models/threaded_rod.glb',
  'brake_caliper': '/models/brake_caliper.glb',
  'brake_calliper': '/models/brake_caliper.glb',
  'caliper': '/models/brake_caliper.glb',
  'disc_brake': '/models/brake_caliper.glb',
  'brake_assembly': '/models/brake_caliper.glb',
  'brake': '/models/brake_caliper.glb',
  'piezo': '/models/piezo_prototype.glb',
  'piezoelectric': '/models/piezo_prototype.glb',
  'piezo_generator': '/models/piezo_prototype.glb',
  'piezoelectric_generator': '/models/piezo_prototype.glb',
  'piezo_prototype': '/models/piezo_prototype.glb',
  'piezo_electric': '/models/piezo_prototype.glb',
  'drone': '/models/drone.glb',
  'quadcopter': '/models/drone.glb',
  'uav': '/models/drone.glb',
  'multirotor': '/models/drone.glb',
  'aerial_drone': '/models/drone.glb',
  'quad_copter': '/models/drone.glb',
  'dc_motor': '/models/dc_motor.glb',
  'motor': '/models/dc_motor.glb',
  'electric_motor': '/models/dc_motor.glb',
  'brushed_motor': '/models/dc_motor.glb',
  'direct_current_motor': '/models/dc_motor.glb',
  'turbine_jet_engine': '/models/turbine_jet_engine.glb',
  'jet_engine': '/models/turbine_jet_engine.glb',
  'turbine_engine': '/models/turbine_jet_engine.glb',
  'jet_turbine': '/models/turbine_jet_engine.glb',
  'turbojet': '/models/turbine_jet_engine.glb',
  'turbofan': '/models/turbine_jet_engine.glb',
  'jet': '/models/turbine_jet_engine.glb',
  'metal_bolt': '/models/metal_bolt.glb',
  'bolt': '/models/metal_bolt.glb',
  'hex_bolt': '/models/metal_bolt.glb',
  'machine_bolt': '/models/metal_bolt.glb',
  'fastener': '/models/metal_bolt.glb',
  'hexagon_bolt': '/models/metal_bolt.glb',
  'nut': '/models/nut.glb',
  'hex_nut': '/models/nut.glb',
  'fastener_nut': '/models/nut.glb',
  'threaded_nut': '/models/nut.glb',
  'rivet': '/models/rivet.glb',
  'metal_rivet': '/models/rivet.glb',
  'pop_rivet': '/models/rivet.glb',
  'blind_rivet': '/models/rivet.glb',
  'axle': '/models/axle.glb',
  'shaft_axle': '/models/axle.glb',
  'drive_axle': '/models/axle.glb',
  'rotating_axle': '/models/axle.glb',
  'screw': '/models/screw.glb',
  'machine_screw': '/models/screw.glb',
  'wood_screw': '/models/screw.glb',
  'fastening_screw': '/models/screw.glb',
  'cnc_spindle': '/models/cnc_spindle.glb',
  'spindle': '/models/cnc_spindle.glb',
  'machining_spindle': '/models/cnc_spindle.glb',
  'milling_spindle': '/models/cnc_spindle.glb',
  'mustang_car': '/models/car.glb',
  'mustang': '/models/car.glb',
  'ford_mustang': '/models/car.glb',
  'car': '/models/car.glb',
  'vehicle': '/models/car.glb',
  'automobile': '/models/car.glb',
  'iphone_12_pro_max': '/models/phone.glb',
  'iphone_12': '/models/phone.glb',
  'iphone': '/models/phone.glb',
  'smartphone': '/models/phone.glb',
  'phone': '/models/phone.glb',
  'mobile_phone': '/models/phone.glb',
  'telephone': '/models/phone.glb',
  'mobile': '/models/phone.glb',
  'clutch': '/models/clutch.glb',
  'clutch_assembly': '/models/clutch.glb',
  'friction_clutch': '/models/clutch.glb',
  'automotive_clutch': '/models/clutch.glb',
  'tricycle': '/models/tricycle.glb',
  'trike': '/models/tricycle.glb',
  'three_wheeler': '/models/tricycle.glb',
  'three_wheeled_vehicle': '/models/tricycle.glb',
  'motorcycle': '/models/motorcycle.glb',
  'motorbike': '/models/motorcycle.glb',
  'bike': '/models/motorcycle.glb',
  'two_wheeler': '/models/motorcycle.glb',
  'grinder': '/models/grinder.glb',
  'angle_grinder': '/models/grinder.glb',
  'grinding_machine': '/models/grinder.glb',
  'bench_grinder': '/models/grinder.glb',
  'power_grinder': '/models/grinder.glb',
  'electric_grinder': '/models/grinder.glb',
  'hand_grinder': '/models/grinder.glb',
  'radio': '/models/radio.glb',
  'transistor_radio': '/models/radio.glb',
  'fm_radio': '/models/radio.glb',
  'am_radio': '/models/radio.glb',
  'portable_radio': '/models/radio.glb',
  'water_pump': '/models/water_pump.glb',
  'pump': '/models/water_pump.glb',
  'centrifugal_pump': '/models/water_pump.glb',
  'submersible_pump': '/models/water_pump.glb',
  'vacuum_cleaner': '/models/vacuum_cleaner.glb',
  'vacuumcleaner': '/models/vacuum_cleaner.glb',
  'vacuum': '/models/vacuum_cleaner.glb',
  'hoover': '/models/vacuum_cleaner.glb',
  'floor_cleaner': '/models/vacuum_cleaner.glb',
  'dust_cleaner': '/models/vacuum_cleaner.glb',
  'home_vacuum': '/models/vacuum_cleaner.glb',
  'cleaning_vacuum': '/models/vacuum_cleaner.glb',
  'upright_vacuum': '/models/vacuum_cleaner.glb',
  'canister_vacuum': '/models/vacuum_cleaner.glb',
  'refrigerator': '/models/refrigerator.glb',
  'fridge': '/models/refrigerator.glb',
  'freezer': '/models/refrigerator.glb',
  'cooling_appliance': '/models/refrigerator.glb',
  'kitchen_refrigerator': '/models/refrigerator.glb',
  'home_fridge': '/models/refrigerator.glb',
  'refrigeration_unit': '/models/refrigerator.glb',
  'cooling_unit': '/models/refrigerator.glb',
  'domestic_refrigerator': '/models/refrigerator.glb',
  'rocket': '/models/rocket.glb',
  'space_rocket': '/models/rocket.glb',
  'missile': '/models/rocket.glb',
  'launch_vehicle': '/models/rocket.glb',
  'spacecraft': '/models/rocket.glb',
  'electric_train': '/models/electric_train.glb',
  'train': '/models/electric_train.glb',
  'locomotive': '/models/electric_train.glb',
  'railway': '/models/electric_train.glb',
  'metro': '/models/electric_train.glb',
  'aeroplane': '/models/aeroplane.glb',
  'airplane': '/models/aeroplane.glb',
  'aircraft': '/models/aeroplane.glb',
  'plane': '/models/aeroplane.glb',
  'passenger_plane': '/models/aeroplane.glb',
  'jet_aircraft': '/models/aeroplane.glb',
  // Newly added components
  'propeller': '/models/propeller.glb',
  'prop': '/models/propeller.glb',
  'air_propeller': '/models/propeller.glb',
  'marine_propeller': '/models/propeller.glb',
  'television': '/models/television.glb',
  'tv': '/models/television.glb',
  'flat_screen': '/models/television.glb',
  'smart_tv': '/models/television.glb',
  'fishing_boat': '/models/fishing_boat.glb',
  'boat': '/models/fishing_boat.glb',
  'fishing_vessel': '/models/fishing_boat.glb',
  'steam_engine': '/models/steam_engine.glb',
  'steam': '/models/steam_engine.glb',
  'steam_locomotive': '/models/steam_engine.glb',
  'air_conditioning': '/models/air_condition.glb',
  'ac_unit': '/models/air_condition.glb',
  'air_conditioner': '/models/air_condition.glb',
  'ac': '/models/air_condition.glb',
  'drill_machine': '/models/drill_machine.glb',
  'drill': '/models/drill_machine.glb',
  'power_drill': '/models/drill_machine.glb',
  'hand_drill': '/models/drill_machine.glb',
  'lathe': '/models/lathe.glb',
  'lathe_machine': '/models/lathe.glb',
  'metal_lathe': '/models/lathe.glb',
  'conveyor_belt_assembly': '/models/conveyor_belt_assembly.glb',
  'conveyor': '/models/conveyor_belt_assembly.glb',
  'belt_conveyor': '/models/conveyor_belt_assembly.glb',
  'assembly_line': '/models/conveyor_belt_assembly.glb',
  'simple_rubber_conveyor': '/models/conveyor_belt_assembly.glb',
  'rubber_conveyor': '/models/conveyor_belt_assembly.glb',
  'ceiling_fan': '/models/ceiling_fan.glb',
  'fan': '/models/ceiling_fan.glb',
  'ceilingfan': '/models/ceiling_fan.glb',
  'electric_fan': '/models/ceiling_fan.glb',
  'microwave_oven': '/models/microwave_oven.glb',
  'microwave': '/models/microwave_oven.glb',
  'oven_microwave': '/models/microwave_oven.glb',
  'gas_oven': '/models/gas_oven.glb',
  'oven_gas': '/models/gas_oven.glb',
  'stove_oven': '/models/gas_oven.glb',
  'light_bulb': '/models/light_bulb.glb',
  'bulb': '/models/light_bulb.glb',
  'incandescent_bulb': '/models/light_bulb.glb',
  'calculator': '/models/calculator.glb',
  'handheld_calculator': '/models/calculator.glb',
  'scientific_calculator': '/models/calculator.glb',
  'lawn_mower': '/models/lawn_mower.glb',
  'mower': '/models/lawn_mower.glb',
  'grass_cutter': '/models/lawn_mower.glb',
  '3d_printer': '/models/3d_printer.glb',
  'printer_3d': '/models/3d_printer.glb',
  'additive_manufacturing': '/models/3d_printer.glb',
  'torch': '/models/torch.glb',
  'flashlight': '/models/torch.glb',
  'hand_torch': '/models/torch.glb',
  'clock': '/models/clock.glb',
  'wall_clock': '/models/clock.glb',
  'analog_clock': '/models/clock.glb',
  'suv': '/models/suv.glb',
  'sport_utility_vehicle': '/models/suv.glb',
  '4x4': '/models/suv.glb',
  'camera': '/models/camera.glb',
  'digital_camera': '/models/camera.glb',
  'dslr': '/models/camera.glb',
  'atm_machine': '/models/atm_machine.glb',
  'atm': '/models/atm_machine.glb',
  'cash_machine': '/models/atm_machine.glb',
  'audio_speaker': '/models/audio_speaker.glb',
  'speaker': '/models/audio_speaker.glb',
  'loudspeaker': '/models/audio_speaker.glb',
  'winch': '/models/winch.glb',
  'electric_winch': '/models/winch.glb',
  'hoist': '/models/winch.glb',
  'air_filter': '/models/air_filter.glb',
  'filter_air': '/models/air_filter.glb',
  'engine_air_filter': '/models/air_filter.glb',
  'rotor_disc_brake': '/models/rotor_disc_brake.glb',
  'disc_brake_rotor': '/models/rotor_disc_brake.glb',
  'brake_rotor': '/models/rotor_disc_brake.glb',
  'radiator': '/models/radiator.glb',
  'cooling_radiator': '/models/radiator.glb',
  'engine_radiator': '/models/radiator.glb',
  'torsion_rod': '/models/torsion_rod.glb',
  'torsion_bar': '/models/torsion_bar.glb',
  'torsion_spring': '/models/torsion_spring.glb',
  'exhaust_manifold': '/models/exhaust_manifold.glb',
  'manifold_exhaust': '/models/exhaust_manifold.glb',
  'engine_manifold': '/models/exhaust_manifold.glb',
  'engine_block': '/models/engine_block.glb',
  'block_engine': '/models/engine_block.glb',
  'cylinder_block': '/models/engine_block.glb',
  'pinball_plunger_assembly': '/models/pinball_plunger_assembly.glb',
  'plunger_pinball': '/models/pinball_plunger_assembly.glb',
  'wind_turbine': '/models/wind_turbine.glb',
  'turbine_wind': '/models/wind_turbine.glb',
  'wind_generator': '/models/wind_turbine.glb',
  'turbine_engine_blade': '/models/turbine_engine_blade.glb',
  'blade_turbine': '/models/turbine_engine_blade.glb',
  'impeller': '/models/impeller.glb',
  'pump_impeller': '/models/impeller.glb',
  'hydraulic_cylinder': '/models/hydraulic_cylinder.glb',
  'cylinder_hydraulic': '/models/hydraulic_cylinder.glb',
  'laser_engraver_cutting_machine': '/models/laser_engraver_cutting_machine.glb',
  'laser_engraver': '/models/laser_engraver_cutting_machine.glb',
  'laser_cutter': '/models/laser_engraver_cutting_machine.glb',
  'washing_machine': '/models/washing_machine.glb',
  'washer_machine': '/models/washing_machine.glb',
  'laundry_machine': '/models/washing_machine.glb',
  'washer': '/models/washer.glb',
  'flat_washer': '/models/washer.glb',
  'hinge_pin': '/models/hinge_pin.glb',
  'pin_hinge': '/models/hinge_pin.glb',
  'coil_spring_damper': '/models/coil_spring__damper.glb',
  'damper_coil_spring': '/models/coil_spring__damper.glb',
  'shock_absorber': '/models/coil_spring__damper.glb',
  'ball_valve': '/models/ball_valve.glb',
  'valve_ball': '/models/ball_valve.glb',
  'flange': '/models/flange.glb',
  'pipe_flange': '/models/flange.glb',
  'clamp': '/models/clamp.glb',
  'hose_clamp': '/models/clamp.glb',
  'slider_crank_mechanism': '/models/slider_crank_mechanism.glb',
  'crank_slider': '/models/slider_crank_mechanism.glb',
  'car_frame': '/models/car_frame.glb',
  'frame_car': '/models/car_frame.glb',
  'vehicle_frame': '/models/car_frame.glb',
  'mechanical_keyboard': '/models/mechanical_keyboard.glb',
  'keyboard_mechanical': '/models/mechanical_keyboard.glb',
  'connecting_rod': '/models/connecting_rod.glb',
  'con_rod': '/models/connecting_rod.glb',
  'vehicle_tire': '/models/vehicle_tire.glb',
  'tire': '/models/vehicle_tire.glb',
  'car_tire': '/models/vehicle_tire.glb',
  'alternator': '/models/alternator.glb',
  'car_alternator': '/models/alternator.glb',
  'generator_alternator': '/models/alternator.glb',
  'car_chassis': '/models/car_chassis.glb',
  'chassis_car': '/models/car_chassis.glb',
  'simple_standing_fan': '/models/simple_standing_fan.glb',
  'standing_fan': '/models/simple_standing_fan.glb',
  'pedestal_fan': '/models/simple_standing_fan.glb',
  'pipe_fitting': '/models/pipe_fitting.glb',
  'fitting_pipe': '/models/pipe_fitting.glb',
  'elbow_fitting': '/models/pipe_fitting.glb',
  'welding_torch': '/models/welding_torch.glb',
  'torch_welding': '/models/welding_torch.glb',
  'welding_gun': '/models/welding_torch.glb',
  'welder_torch': '/models/welding_torch.glb',
  'welding_machine': '/models/welding_machine.glb',
  'machine_welding': '/models/welding_machine.glb',
  'welder': '/models/welding_machine.glb',
  'arc_welder': '/models/welding_machine.glb',
  'crane': '/models/crane.glb',
  'lifting_crane': '/models/crane.glb',
  'tower_crane': '/models/crane.glb',
  'construction_crane': '/models/crane.glb',
  'hoist_crane': '/models/crane.glb',
};

const BASE_SCALES: Record<string, number> = {
  '/models/v8_engine.glb': 24.0,
  '/models/robot_arm.glb': 6.0,
  '/models/robot.glb': 80.0,
  '/models/rack_pinion.glb': 12.0,
  '/models/linkage.glb': 50.0,
  '/models/pulley.glb': 60.0,
  '/models/actuator.glb': 1.5,
  '/models/piston.glb': 0.4,
  '/models/crankshaft.glb': 0.3,
  '/models/ball_bearing.glb': 1.0,
  '/models/chain_and_sprocket.glb': 600.0,
  '/models/knuckle_joint.glb': 0.8,
  '/models/leaf_spring.glb': 1.8,
  '/models/articulated_coupling.glb': 1.0,
  '/models/flywheel.glb': 0.5,
  '/models/worm_gear_box.glb': 200.0,
  '/models/heat_exchanger.glb': 35.0,
  '/models/air_compressor.glb': 150.0,
  '/models/universal_joint.glb': 0.5,
  '/models/ball_joint.glb': 1.5,
  '/models/threaded_rod.glb': 1.0,
  '/models/brake_caliper.glb': 1.0,
  '/models/piezo_prototype.glb': 600.0,
  '/models/drone.glb': 70.0,
  '/models/dc_motor.glb': 74.0,
  '/models/turbine_jet_engine.glb': 250.0,
  '/models/metal_bolt.glb': 20.0,
  '/models/car.glb': 4500.0,
  '/models/phone.glb': 1.0,
  '/models/clutch.glb': 4.0,
  '/models/nut.glb': 0.5,
  '/models/rivet.glb': 4.0,
  '/models/axle.glb': 10.0,
  '/models/screw.glb': 40.0,
  '/models/cnc_spindle.glb': 600.0,
  '/models/tricycle.glb': 55.0,
  '/models/motorcycle.glb': 50.0,
  '/models/grinder.glb': 0.13,
  '/models/radio.glb': 11.0,
  '/models/water_pump.glb': 250.0,
  '/models/vacuum_cleaner.glb': 0.9,
  '/models/refrigerator.glb': 1.5,
  '/models/rocket.glb': 0.3,
  '/models/electric_train.glb': 14.0,
  '/models/aeroplane.glb': 13.0,
  '/models/propeller.glb': 10.0,
  '/models/television.glb': 14.0,
  '/models/fishing_boat.glb': 140.0,
  '/models/steam_engine.glb': 350,
  '/models/air_condition.glb': 92.0,
  '/models/drill_machine.glb': 110.0,
  '/models/lathe.glb': 100.0,
  '/models/conveyor_belt_assembly.glb': 40.0,
  '/models/ceiling_fan.glb': 90.0,
  '/models/microwave_oven.glb': 2.5,
  '/models/gas_oven.glb': 1.8,
  '/models/light_bulb.glb': 80.0,
  '/models/calculator.glb': 650.0,
  '/models/lawn_mower.glb': 70.0,
  '/models/3d_printer.glb': 0.04,
  '/models/torch.glb': 250.0,
  '/models/clock.glb': 1.0,
  '/models/suv.glb': 3500.0,
  '/models/camera.glb': 60.0,
  '/models/atm_machine.glb': 78.0,
  '/models/audio_speaker.glb': 150.0,
  '/models/winch.glb': 60.0,
  '/models/air_filter.glb': 0.5,
  '/models/rotor_disc_brake.glb': 0.3,
  '/models/radiator.glb': 0.26,
  '/models/torsion_rod.glb': 0.2,
  '/models/torsion_bar.glb': 0.2,
  '/models/torsion_spring.glb': 3.0,
  '/models/exhaust_manifold.glb': 2.5,
  '/models/engine_block.glb': 20.0,
  '/models/pinball_plunger_assembly.glb': 20.0,
  '/models/wind_turbine.glb': 6.0,
  '/models/turbine_engine_blade.glb': 0.2,
  '/models/impeller.glb': 1.5,
  '/models/hydraulic_cylinder.glb': 0.2,
  '/models/laser_engraver_cutting_machine.glb': 0.8,
  '/models/washing_machine.glb': 3.0,
  '/models/washer.glb': 5,
  '/models/hinge_pin.glb': 800.0,
  '/models/coil_spring__damper.glb': 0.23,
  '/models/ball_valve.glb': 55.0,
  '/models/flange.glb': 2.0,
  '/models/clamp.glb': 500.0,
  '/models/slider_crank_mechanism.glb': 550.0,
  '/models/car_frame.glb': 10.0,
  '/models/mechanical_keyboard.glb': 500.0,
  '/models/connecting_rod.glb': 0.5,
  '/models/vehicle_tire.glb': 110.0,
  '/models/alternator.glb': 10.0,
  '/models/car_chassis.glb': 55.0,
  '/models/simple_standing_fan.glb': 18.0,
  '/models/pipe_fitting.glb': 800,
  '/models/welding_torch.glb': 35.0, // Adjust scale as needed based on model size
  '/models/welding_machine.glb': 60.0, // Adjust scale as needed based on model size
  '/models/crane.glb': 0.1, // Adjust scale as needed based on model size
};

const MODEL_Y_POSITIONS: Record<string, number> = {
  '/models/v8_engine.glb': 0,
  '/models/robot_arm.glb': 0,
  '/models/robot.glb': 80,
  '/models/rack_pinion.glb': 60,
  '/models/linkage.glb': 80,
  '/models/pulley.glb': 80,
  '/models/actuator.glb': 50,
  '/models/piston.glb': 100,
  '/models/crankshaft.glb': 50,
  '/models/ball_bearing.glb': 80,
  '/models/chain_and_sprocket.glb': 60,
  '/models/knuckle_joint.glb': 50,
  '/models/leaf_spring.glb': 60,
  '/models/articulated_coupling.glb': 50,
  '/models/flywheel.glb': 50,
  '/models/worm_gear_box.glb': 38,
  '/models/heat_exchanger.glb': 0,
  '/models/air_compressor.glb': 0,
  '/models/universal_joint.glb': 40,
  '/models/ball_joint.glb': 80,
  '/models/threaded_rod.glb': 30,
  '/models/brake_caliper.glb': 50,
  '/models/piezo_prototype.glb': 30,
  '/models/drone.glb': 0,
  '/models/dc_motor.glb': 80,
  '/models/turbine_jet_engine.glb': 0,
  '/models/metal_bolt.glb': 40,
  '/models/car.glb': 0,
  '/models/phone.glb': 4,
  '/models/clutch.glb': 50,
  '/models/nut.glb': 20,
  '/models/rivet.glb': 20,
  '/models/axle.glb': 0,
  '/models/screw.glb': 50,
  '/models/cnc_spindle.glb': 200,
  '/models/tricycle.glb': 60,
  '/models/motorcycle.glb': 25,
  '/models/grinder.glb': 20,
  '/models/radio.glb': 0,
  '/models/water_pump.glb': 60,
  '/models/vacuum_cleaner.glb': 50,
  '/models/refrigerator.glb': 60,
  '/models/rocket.glb': 10,
  '/models/electric_train.glb': -10,
  '/models/aeroplane.glb': 60,
  '/models/propeller.glb': 58,
  '/models/television.glb': 0,
  '/models/fishing_boat.glb': 30,
  '/models/steam_engine.glb': 80,
  '/models/air_condition.glb': 35,
  '/models/drill_machine.glb': 0,
  '/models/lathe.glb': 38,
  '/models/conveyor_belt_assembly.glb': 30,
  '/models/ceiling_fan.glb': 0,
  '/models/microwave_oven.glb': 20,
  '/models/gas_oven.glb': 50,
  '/models/light_bulb.glb': 20,
  '/models/calculator.glb': 55,
  '/models/lawn_mower.glb': 51,
  '/models/3d_printer.glb': 0,
  '/models/torch.glb': 17,
  '/models/clock.glb': 0.30,
  '/models/suv.glb': 0,
  '/models/camera.glb': 40,
  '/models/atm_machine.glb': 0,
  '/models/audio_speaker.glb': 0,
  '/models/winch.glb': 0,
  '/models/air_filter.glb': 50,
  '/models/rotor_disc_brake.glb': 57,
  '/models/radiator.glb': 57,
  '/models/torsion_rod.glb': 0,
  '/models/torsion_bar.glb': 14,
  '/models/torsion_spring.glb': 110,
  '/models/exhaust_manifold.glb': 10,
  '/models/engine_block.glb': 0,
  '/models/pinball_plunger_assembly.glb': 0,
  '/models/wind_turbine.glb': 0,
  '/models/turbine_engine_blade.glb': 50,
  '/models/impeller.glb': 8,
  '/models/hydraulic_cylinder.glb': 30,
  '/models/laser_engraver_cutting_machine.glb': 60,
  '/models/washing_machine.glb': 40,
  '/models/washer.glb': -70,
  '/models/hinge_pin.glb': 0,
  '/models/coil_spring__damper.glb': 103,
  '/models/ball_valve.glb': 30,
  '/models/flange.glb': 50,
  '/models/clamp.glb': 0,
  '/models/slider_crank_mechanism.glb': 30,
  '/models/car_frame.glb': 13,
  '/models/mechanical_keyboard.glb': 10,
  '/models/connecting_rod.glb': 95,
  '/models/vehicle_tire.glb': 50,
  '/models/alternator.glb': 45,
  '/models/car_chassis.glb': 0,
  '/models/simple_standing_fan.glb': 1,
  '/models/pipe_fitting.glb': 0,
  '/models/welding_torch.glb': 0, // Adjust Y position as needed based on model bounding box
  '/models/welding_machine.glb': 0, // Adjust Y position as needed based on model bounding box
  '/models/crane.glb': 0, // Adjust Y position as needed based on model bounding box
};

// Correctly typed list of priority models to preload
const PRIORITY_MODELS: string[] = [];

export const preloadPriorityModels = () => {
  PRIORITY_MODELS.forEach((path) => {
    useGLTF.preload(path);
  });
};

// NEW: Custom X offsets specifically for the last five added models
const MODEL_X_POSITIONS: Record<string, number> = {
  '/models/air_condition.glb': 0,
  '/models/drill_machine.glb': 0,
  '/models/lathe.glb': -30,          // Shift left to better center the long lathe bed
  '/models/conveyor_belt_assembly.glb': 0,
  '/models/ceiling_fan.glb': 0,
  '/models/nut.glb': -4,
  '/models/microwave_oven.glb': 0,
  '/models/gas_oven.glb': 0,
  '/models/light_bulb.glb': 0,
  '/models/calculator.glb': 0,
  '/models/lawn_mower.glb': 0,
  '/models/3d_printer.glb': 0,
  '/models/torch.glb': 0,
  '/models/clock.glb': 0,
  '/models/suv.glb': 0,
  '/models/camera.glb': 0,
  '/models/atm_machine.glb': 0,
  '/models/audio_speaker.glb': 0,
  '/models/winch.glb': 0,
  '/models/air_filter.glb': 0,
  '/models/rotor_disc_brake.glb': 0,
  '/models/radiator.glb': 0,
  '/models/torsion_rod.glb': 0,
  '/models/torsion_bar.glb': 0,
  '/models/torsion_spring.glb': 0,
  '/models/exhaust_manifold.glb': 0,
  '/models/engine_block.glb': 0,
  '/models/pinball_plunger_assembly.glb': 0,
  '/models/wind_turbine.glb': 0,
  '/models/turbine_engine_blade.glb': 0,
  '/models/impeller.glb': 0,
  '/models/hydraulic_cylinder.glb': -1,
  '/models/laser_engraver_cutting_machine.glb': 0,
  '/models/washing_machine.glb': 0.10,
  '/models/washer.glb': 0,
  '/models/hinge_pin.glb': 0,
  '/models/coil_spring__damper.glb': 0,
  '/models/ball_valve.glb': 0,
  '/models/flange.glb': 0,
  '/models/clamp.glb': 0,
  '/models/slider_crank_mechanism.glb': 0,
  '/models/car_frame.glb': -20,
  '/models/mechanical_keyboard.glb': 0,
  '/models/connecting_rod.glb': 0,
  '/models/vehicle_tire.glb': 0,
  '/models/alternator.glb': 0,
  '/models/car_chassis.glb': -15,
  '/models/simple_standing_fan.glb': 0,
  '/models/pipe_fitting.glb': 0,
  '/models/welding_torch.glb': 0, // Adjust X position as needed
  '/models/welding_machine.glb': 0, // Adjust X position as needed
  '/models/crane.glb': 0, // Adjust X position as needed
};

// NEW: Position modes for custom handling (ground, hanging, center)
const MODEL_POSITION_MODES: Record<string, string> = {
  '/models/ceiling_fan.glb': 'ground',
  '/models/simple_standing_fan.glb': 'ground',
  '/models/drone.glb': 'ground',  // Changed from 'center' to 'ground' to sit on landing gear
  '/models/welding_torch.glb': 'ground', // Assuming ground positioning
  '/models/welding_machine.glb': 'ground', // Assuming ground positioning
  '/models/crane.glb': 'ground', // Assuming ground positioning
  // Add more as needed for other models
};

// Helper for model path resolution
const getModelPath = (componentType: string): string => {
  const normalizedType = componentType?.toLowerCase().trim().replace(/\s+/g, '_') || '';

  // Return the logical path (e.g., /models/gear.glb)
  // We do NOT prepend the R2 URL here anymore, to preserve BASE_SCALES lookups.
  // The R2 URL transformation happens in the component.

  let path = '/models/linkage.glb'; // Default

  if (MODEL_MAP[normalizedType]) {
    path = MODEL_MAP[normalizedType];
  } else {
    // Fallbacks
    const typeStr = normalizedType;
    if (typeStr.includes('vacuum') || typeStr.includes('cleaner')) path = '/models/vacuum_cleaner.glb';
    else if (typeStr.includes('refrigerat') || typeStr.includes('fridge') || typeStr.includes('freezer')) path = '/models/refrigerator.glb';
    else if (typeStr.includes('train') || typeStr.includes('locomotive') || typeStr.includes('railway')) path = '/models/electric_train.glb';
    else if (typeStr.includes('grinder') || typeStr.includes('grinding')) path = '/models/grinder.glb';
    else if (typeStr.includes('rocket') || typeStr.includes('spacecraft') || typeStr.includes('missile')) path = '/models/rocket.glb';
    else if (typeStr.includes('motorcycle') || typeStr.includes('motorbike')) path = '/models/motorcycle.glb';
    else if (typeStr.includes('propeller') || typeStr.includes('prop')) path = '/models/propeller.glb';
    else if (typeStr.includes('television') || typeStr.includes('tv')) path = '/models/television.glb';
    else if (typeStr.includes('boat') || typeStr.includes('fishing')) path = '/models/fishing_boat.glb';
    else if (typeStr.includes('steam')) path = '/models/steam_engine.glb';
    else if (typeStr.includes('air_condition') || typeStr.includes('ac')) path = '/models/air_condition.glb';
    else if (typeStr.includes('drill')) path = '/models/drill_machine.glb';
    else if (typeStr.includes('lathe')) path = '/models/lathe.glb';
    else if (typeStr.includes('conveyor')) path = '/models/conveyor_belt_assembly.glb';
    else if (typeStr.includes('fan') && typeStr.includes('ceiling')) path = '/models/ceiling_fan.glb';
    else if (typeStr.includes('microwave') || typeStr.includes('oven_microwave')) path = '/models/microwave_oven.glb';
    else if (typeStr.includes('gas_oven') || typeStr.includes('oven_gas')) path = '/models/gas_oven.glb';
    else if (typeStr.includes('light_bulb') || typeStr.includes('bulb')) path = '/models/light_bulb.glb';
    else if (typeStr.includes('calculator')) path = '/models/calculator.glb';
    else if (typeStr.includes('lawn_mower') || typeStr.includes('mower')) path = '/models/lawn_mower.glb';
    else if (typeStr.includes('3d_printer') || typeStr.includes('printer_3d')) path = '/models/3d_printer.glb';
    else if (typeStr.includes('torch') || typeStr.includes('flashlight')) path = '/models/torch.glb';
    else if (typeStr.includes('clock')) path = '/models/clock.glb';
    else if (typeStr.includes('suv') || typeStr.includes('sport_utility')) path = '/models/suv.glb';
    else if (typeStr.includes('camera')) path = '/models/camera.glb';
    else if (typeStr.includes('atm') || typeStr.includes('cash_machine')) path = '/models/atm_machine.glb';
    else if (typeStr.includes('speaker') || typeStr.includes('audio_speaker')) path = '/models/audio_speaker.glb';
    else if (typeStr.includes('winch')) path = '/models/winch.glb';
    else if (typeStr.includes('air_filter')) path = '/models/air_filter.glb';
    else if (typeStr.includes('rotor_disc') || typeStr.includes('brake_rotor')) path = '/models/rotor_disc_brake.glb';
    else if (typeStr.includes('radiator')) path = '/models/radiator.glb';
    else if (typeStr.includes('torsion_rod')) path = '/models/torsion_rod.glb';
    else if (typeStr.includes('torsion_bar')) path = '/models/torsion_bar.glb';
    else if (typeStr.includes('torsion_spring')) path = '/models/torsion_spring.glb';
    else if (typeStr.includes('exhaust_manifold')) path = '/models/exhaust_manifold.glb';
    else if (typeStr.includes('engine_block')) path = '/models/engine_block.glb';
    else if (typeStr.includes('pinball_plunger')) path = '/models/pinball_plunger_assembly.glb';
    else if (typeStr.includes('wind_turbine')) path = '/models/wind_turbine.glb';
    else if (typeStr.includes('turbine_blade')) path = '/models/turbine_engine_blade.glb';
    else if (typeStr.includes('impeller')) path = '/models/impeller.glb';
    else if (typeStr.includes('hydraulic_cylinder')) path = '/models/hydraulic_cylinder.glb';
    else if (typeStr.includes('laser_engraver') || typeStr.includes('laser_cutter')) path = '/models/laser_engraver_cutting_machine.glb';
    else if (typeStr.includes('washing_machine')) path = '/models/washing_machine.glb';
    else if (typeStr.includes('washer')) path = '/models/washer.glb';
    else if (typeStr.includes('hinge_pin')) path = '/models/hinge_pin.glb';
    else if (typeStr.includes('coil_spring_damper') || typeStr.includes('shock_absorber')) path = '/models/coil_spring__damper.glb';
    else if (typeStr.includes('ball_valve')) path = '/models/ball_valve.glb';
    else if (typeStr.includes('flange')) path = '/models/flange.glb';
    else if (typeStr.includes('clamp')) path = '/models/clamp.glb';
    else if (typeStr.includes('slider_crank')) path = '/models/slider_crank_mechanism.glb';
    else if (typeStr.includes('car_frame')) path = '/models/car_frame.glb';
    else if (typeStr.includes('mechanical_keyboard')) path = '/models/mechanical_keyboard.glb';
    else if (typeStr.includes('connecting_rod')) path = '/models/connecting_rod.glb';
    else if (typeStr.includes('vehicle_tire') || typeStr.includes('tire')) path = '/models/vehicle_tire.glb';
    else if (typeStr.includes('alternator')) path = '/models/alternator.glb';
    else if (typeStr.includes('car_chassis')) path = '/models/car_chassis.glb';
    else if (typeStr.includes('standing_fan')) path = '/models/simple_standing_fan.glb';
    else if (typeStr.includes('pipe_fitting')) path = '/models/pipe_fitting.glb';
    else if (typeStr.includes('welding') && typeStr.includes('torch')) path = '/models/welding_torch.glb';
    else if (typeStr.includes('welding') && typeStr.includes('machine')) path = '/models/welding_machine.glb';
    else if (typeStr.includes('crane')) path = '/models/crane.glb';
  }

  return path;
};

interface ModelLoaderProps {
  componentType: string;
  specifications: any;
  manualScale?: number;
  wireframeMode?: boolean;
  onModelLoaded?: (scene: THREE.Object3D) => void;
}

const GLTFModel = ({
  fetchUrl,
  modelPath,
  manualScale,
  wireframeMode,
  onLoaded,
  xPosition,
  yPosition
}: any) => {
  const { scene } = useGLTF(fetchUrl) as any;
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  const finalScale = useMemo(() => {
    // Look up scale using the LOGICAL path (modelPath), not the URL
    const base = BASE_SCALES[modelPath] || 10.0;
    return base * manualScale;
  }, [modelPath, manualScale]);

  // Apply initial position (will be adjusted in useEffect)
  useEffect(() => {
    if (clonedScene) {
      clonedScene.position.set(xPosition, yPosition, 0);
    }
  }, [clonedScene, xPosition, yPosition]);

  // Material / shadow / wireframe / bounding box positioning
  useEffect(() => {
    if (!clonedScene) return;

    clonedScene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(mat => {
              if (mat instanceof THREE.Material) (mat as any).wireframe = wireframeMode;
            });
          } else if (child.material instanceof THREE.Material) {
            (child.material as any).wireframe = wireframeMode;
          }
        }
      }
    });

    // Compute bounding box after scale is applied and adjust position
    clonedScene.updateMatrixWorld();
    const box = new THREE.Box3().setFromObject(clonedScene, true);
    const center = new THREE.Vector3();
    box.getCenter(center);
    const min = box.min;
    const max = box.max;

    const mode = MODEL_POSITION_MODES[modelPath] || 'ground';
    let yOffset = 0;
    if (mode === 'ground') {
      yOffset = -min.y;
    } else if (mode === 'hanging') {
      yOffset = -max.y;
    } else { // 'center'
      yOffset = -center.y;
    }

    clonedScene.position.x = -center.x + xPosition;
    clonedScene.position.y = yOffset + yPosition;
    clonedScene.position.z = -center.z;

    // NEW: Log the final bounding box for debugging positioning (e.g., for crane)
    clonedScene.updateMatrixWorld();
    const boxAfter = new THREE.Box3().setFromObject(clonedScene, true);
    console.log('Model:', modelPath, 'Final bounding box:', boxAfter.min, boxAfter.max, 'Position:', clonedScene.position);

    if (onLoaded) {
      onLoaded(clonedScene);
    }
  }, [clonedScene, wireframeMode, onLoaded, modelPath, xPosition, yPosition]);

  return (
    <primitive
      object={clonedScene}
      scale={[finalScale, finalScale, finalScale]}
    />
  );
};

function ModelLoader({
  componentType,
  specifications,
  manualScale = 1.0,
  wireframeMode = false,
  onModelLoaded
}: ModelLoaderProps) {

  // 1. Get the logical path (e.g. "/models/gear.glb") for config lookups
  const modelPath = useMemo(() => getModelPath(componentType), [componentType]);

  // 2. Construct the actual fetch URL for R2 (e.g. "https://XXX/gear.glb"), stripping "/models"
  const fetchUrl = useMemo(() => {
    // HARDCODED R2 URL
    const r2Url = "https://models.mechone.space";

    // Strip "/models" from the start if present
    const cleanPath = modelPath.startsWith('/models/') ? modelPath.replace('/models/', '') : modelPath.startsWith('/') ? modelPath.slice(1) : modelPath;

    return `${r2Url}/${cleanPath}`;
  }, [modelPath]);


  const wantsProceduralGear = useMemo(() => {
    // 1. Explicit request via visual parameters
    if (specifications?.visual_parameters?.num_teeth > 0) return true;

    // 2. Component type analysis
    const type = componentType?.toLowerCase() || '';

    // Explicit exclusions (things that are gears but have specific GLBs)
    if (type.includes('worm') || type.includes('box') || type.includes('rack')) return false;

    // Inclusions
    return type.includes('gear') || type.includes('spur') || type.includes('pinion') || type.includes('sprocket');
  }, [specifications, componentType]);

  const yPosition = useMemo(() => MODEL_Y_POSITIONS[modelPath] || 0, [modelPath]);
  const xPosition = useMemo(() => MODEL_X_POSITIONS[modelPath] || 0, [modelPath]);

  if (wantsProceduralGear) {
    const { num_teeth, gear_radius, gear_thickness, gear_scale_y } = specifications?.visual_parameters || {};

    // Defaults if parameters are missing (e.g. generic "gear" request)
    const effectiveNumTeeth = num_teeth || 20;

    // Calculate final scale
    const proceduralBaseScale = 1.0;
    const pScale = proceduralBaseScale * (manualScale || 1.0);

    // Procedural gear positioning
    const effectiveThickness = (gear_thickness || 8) * (gear_scale_y || 1.0) * pScale;

    return (
      <group position={[0, (effectiveThickness / 2) + 50, 0]}>
        <ProceduralGear
          numTeeth={effectiveNumTeeth}
          radius={40}
          thickness={8}
          color="#888888"
          manualScale={pScale}
          scaleY={1.0}
        />
      </group>
    );
  }

  return (
    <GLTFModel
      fetchUrl={fetchUrl}
      modelPath={modelPath}
      manualScale={manualScale}
      wireframeMode={wireframeMode}
      onLoaded={onModelLoaded}
      xPosition={xPosition}
      yPosition={yPosition}
    />
  );
}

// Preload all unique models
const uniquePaths = Array.from(new Set(Object.values(MODEL_MAP)));
uniquePaths.forEach(path => useGLTF.preload(path));

// Export Memoized component
export default React.memo(ModelLoader);